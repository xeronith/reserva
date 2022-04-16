import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppContextConsumer } from '../context/AppContext';
import { ReservationStackScreenProps } from '../types';
import { AvailableTimeView, ContainerView, Fee, Input, Period, Time, Title } from './StyledComponents';

export default function CustomerInfo({ navigation }: ReservationStackScreenProps<'Customer'>) {
    return (<AppContextConsumer>
        {
            context => context && (
                <ContainerView>
                    <Title>{context.restaurant.name}</Title>
                    <AvailableTimeView>
                        <Time>
                            {context.restaurant.availableTimes[context.selectedTime].time}:00
                        </Time>
                        <Period>
                            For {context.restaurant.availableTimes[context.selectedTime].period} Minutes
                        </Period>
                        <Fee>{context.restaurant.availableTimes[context.selectedTime].fee}£</Fee>
                    </AvailableTimeView>
                    <Input
                        placeholder="Name"
                        defaultValue={context.customer.name}
                        onChangeText={text => context.customer.name = text}
                        autoCorrect={false} />
                    <Input
                        placeholder="Email"
                        defaultValue={context.customer.email}
                        onChangeText={text => context.customer.email = text}
                        autoCapitalize='none'
                        autoCompleteType='email'
                        autoCorrect={false} />
                    <Button title='Continue' onPress={() => {
                        navigation.navigate('Summary')
                    }} />
                </ContainerView>
            )
        }
    </AppContextConsumer>);
}
