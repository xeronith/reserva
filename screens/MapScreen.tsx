import { StyleSheet } from 'react-native';
import { useQuery } from 'react-query'
import { useRef } from "react";
import { View, Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Restaurant, AppContextConsumer } from '../context/AppContext';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'
import { getRestaurants } from '../api/restaurants';

export default function MapScreen({ navigation }: RootTabScreenProps<'Map'>) {
  const mapRef = useRef<MapView>(null);

  const onRestaurantSelected = (restaurant: Restaurant) => {
    navigation.navigate('Reservation');
    mapRef.current?.animateToRegion({
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }, 500);
  }


  const { isLoading, error, data } = useQuery<{ [key: string]: any }, Error>('getRestaurants', getRestaurants)

  if (isLoading) return <Text style={styles.message}>Please wait while data is being loaded ...</Text>;

  if (error) return <Text style={[styles.message, styles.error]}>An error has occurred: {error.message}</Text>;

  const restaurants = data || {};

  return (
    <AppContextConsumer>
      {context => context && (
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={{
              latitude: 51.512909,
              longitude: -0.118581,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}>
            {
              Object.keys(restaurants).map(restaurant => {
                const restaurantInformation = restaurants[restaurant];
                return <Marker key={restaurant} coordinate={{
                  latitude: restaurantInformation.location[0],
                  longitude: restaurantInformation.location[1],
                }} onPress={() => {
                  context.selectedTime = 0;
                  context.restaurant = {
                    name: restaurant,
                    image: restaurantInformation.image,
                    latitude: restaurantInformation.location[0],
                    longitude: restaurantInformation.location[1],
                    availableTimes: restaurantInformation.availableTimes
                  }

                  onRestaurantSelected(context.restaurant);
                }} />
              })
            }
          </MapView>
        </View>
      )}
    </AppContextConsumer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  message: {
    padding: 30,
    fontSize: 20,
  },
  error: {
    color: 'red'
  }
});
