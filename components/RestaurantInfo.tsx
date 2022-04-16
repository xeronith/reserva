import { StatusBar } from 'expo-status-bar';
import { Platform, TouchableOpacity } from 'react-native';
import { BASE_URL } from '../api/config';
import { View } from '../components/Themed';
import { AppContextConsumer } from '../context/AppContext';
import { ReservationStackScreenProps } from '../types';
import { ContainerView, Fee, GrayAvailableTimeView, ImageContainerView, ImageView, Period, Time, Title } from './StyledComponents';

export default function RestaurantInfo({ navigation }: ReservationStackScreenProps<'Restaurant'>) {
    return (<AppContextConsumer>
        {context => context && (
            <ContainerView>
                <Title>{context.restaurant.name}</Title>
                <ImageContainerView>
                    <ImageView source={{ uri: BASE_URL + context.restaurant.image }} />
                </ImageContainerView>
                {
                    context.restaurant.availableTimes.map((availableTime, index) => {
                        return <TouchableOpacity key={availableTime.time}
                            onPress={() => {
                                context.selectedTime = index; navigation.navigate('Customer')
                            }}>

                            <GrayAvailableTimeView>
                                <View style={{ backgroundColor: 'transparent' }}>
                                    <Time>{availableTime.time}:00</Time>
                                    <Period>For {availableTime.period} Minutes</Period>
                                </View>
                                <Fee>{availableTime.fee}£</Fee>
                            </GrayAvailableTimeView>
                        </TouchableOpacity>
                    })
                }
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </ContainerView>
        )}
    </AppContextConsumer>);
}
