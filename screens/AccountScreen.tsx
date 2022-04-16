import { ScrollView, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { getReservations } from '../api/reservations';

import { Text, View } from '../components/Themed';
import { AppContextConsumer, Reservation } from '../context/AppContext';

export default function AccountScreen() {
  const { isLoading, error, data } = useQuery<Reservation[], Error>('getReservations', getReservations)

  if (isLoading) return <Text style={styles.message}>Please wait while data is being loaded ...</Text>;

  if (error) return <Text style={[styles.message, styles.error]}>An error has occurred: {error.message}</Text>;

  const reservations = data || [];

  return <AppContextConsumer>
    {context => context && (
      <ScrollView style={styles.container}>
        <View style={styles.avatar} />
        <Text style={styles.title}>Your Reservations</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {
          reservations.map((reservation, index) => {
            return <View key={index} style={styles.listItem}>
              <Text style={styles.restaurant}>{reservation.restaurant}</Text>
              <Text style={styles.time}>{reservation.time}:00</Text>
              <Text style={styles.period}>{reservation.period} Minutes</Text>
              <Text style={styles.fee}>{reservation.fee}£</Text>
            </View>
          })
        }
      </ScrollView>)}
  </AppContextConsumer>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white'
  },
  avatar: {
    width: 140,
    height: 140,
    backgroundColor: '#eee',
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 70,
    alignSelf: 'center',
    marginBottom: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  message: {
    padding: 30,
    fontSize: 20,
  },
  error: {
    color: 'red'
  },
  listItem: {
    width: '100%',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  restaurant: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'capitalize'
  },
  time: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  period: {
    color: '#c00',
  },
  fee: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#666'
  },
});
