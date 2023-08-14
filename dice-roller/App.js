import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import DiceRoller from './components/DiceRoller';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting>Good morning, let's roll some dice!</Greeting>
      <DiceRoller/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
