import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import HelpScreenInfo from '../components/HelpScreenInfo';
import { Text, View } from '../components/Themed';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserva</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HelpScreenInfo author="Meysam Mousavi" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
