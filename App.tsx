import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import GaleryComponent from './components/GaleryComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Silly gallery</Text>
        <Text style={styles.subtitle}>A practice about React Native</Text>
      </View>
      <StatusBar hidden={true} />
      <GaleryComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  }
});
