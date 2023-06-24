import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}
        source={require('./images/mouse.jpg.jpg')}>
          <Text style={styles.text}>My super app!</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "red", 
    fontSize: 20
  },

  textWrapper: {
    borderWidth: 1,
    borderColor: "red",
    padding: 30
  },
});
