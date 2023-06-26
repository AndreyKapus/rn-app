// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
// import { StyleSheet, Text, View, ImageBackground, TextInput, Button, TouchableOpacity, Platform } from 'react-native';

// const initialState = {
//   email: '',
//   password: ''
// }

export default function App() {
  // const [state, setState] = useState(initialState)

  return (
    <>
      <LoginScreen/>
      <RegistrationScreen/>
    </>
    // <View style={styles.container}>
    //   <ImageBackground style={styles.image}
    //     source={require('./images/mouse.jpg.jpg')}>
    //       <View style={styles.form}>
    //         <View>
    //           <Text style={styles.text}>Email</Text>
    //           <TextInput 
    //             style={styles.input} 
    //             textAlign='center'
    //             onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
    //           />
    //         </View>
    //         <View style={{marginTop: 20}}>
    //           <Text style={styles.text}>Password</Text>
    //           <TextInput 
    //             style={styles.input} 
    //             textAlign='center' 
    //             secureTextEntry={true}
    //             onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
    //             />
    //         </View>
    //         <TouchableOpacity style={styles.signInBtn} activeOpacity={0.8}>
    //           <Text style={styles.btnText}>
    //             SIGN IN
    //           </Text>
    //         </TouchableOpacity>
    //       </View>
    //   </ImageBackground>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     // alignItems: "center",
//   },

//   form: {
//     marginHorizontal: 20,
//   },

//   text: {
//     color: "#fff", 
//     fontSize: 18,
//     marginBottom: 10,
//   },

//   textWrapper: {
//     borderWidth: 1,
//     borderColor: "#fff",
//     padding: 30
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#fff',
//     borderRadius: 5,
//     height: 40,
//     color: '#fff',
//   },

//   signInBtn: {
//     backgroundColor: "#2A9AFD",
//     height: 40,
//     borderRadius: 5,
//     marginTop: 40,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },

//   btnText: {
//     color: '#fff',
//     fontSize: 18,
//   }
// });
