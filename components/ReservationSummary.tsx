import { Button } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { addReservation } from '../api/reservations';
import { View } from '../components/Themed';
import { AppContextConsumer } from '../context/AppContext';
import { RootStackScreenProps } from '../types';
import { AvailableTimeView, ContainerView, CustomerEmail, CustomerName, ErrorMessage, Fee, Message, Period, Time, Title } from './StyledComponents';

export default function ReservationSummary({ navigation }: RootStackScreenProps<'Root'>) {
    const queryClient = useQueryClient()
    const mutation = useMutation(addReservation, {
        onSuccess: () => {
            queryClient.invalidateQueries('getReservations')
        }
    });

    if (mutation.isLoading) return <ContainerView>
        <Message>Please wait ...</Message>
    </ContainerView>

    if (mutation.isSuccess) return <ContainerView>
        <Message>Your reservation has been confirmed.</Message>
        <Button title='Continue' onPress={() => {
            navigation.navigate('Root');
        }} />
    </ContainerView>

    if (mutation.isError) return <ContainerView>
        <ErrorMessage>An error has occurred. Please try again!</ErrorMessage>
        <Button title='Continue' onPress={() => {
            navigation.navigate('Root');
        }} />
    </ContainerView>

    return (<AppContextConsumer>
        {context => context && (
            <ContainerView>
                <Title>{context.restaurant.name}</Title>
                <AvailableTimeView>
                    <CustomerName>Name: {context.customer.name}</CustomerName>
                    <CustomerEmail>{context.customer.email}</CustomerEmail>
                    <Time>Time: {context.restaurant.availableTimes[context.selectedTime].time}:00</Time>
                    <Period>Duration: {context.restaurant.availableTimes[context.selectedTime].period} Minutes</Period>
                    <Fee>{context.restaurant.availableTimes[context.selectedTime].fee}£</Fee>
                </AvailableTimeView>
                <Button title='Proceed to Checkout' onPress={() => {
                    const availableTime = context.restaurant.availableTimes[context.selectedTime];
                    mutation.mutate({
                        name: context.customer.name,
                        email: context.customer.email,
                        restaurant: context.restaurant.name,
                        time: availableTime.time,
                        period: availableTime.period,
                        fee: availableTime.fee
                    });
                }} />
            </ContainerView>
        )}
    </AppContextConsumer>);
}
