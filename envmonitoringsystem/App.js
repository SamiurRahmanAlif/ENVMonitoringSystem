

// text + icon view pages 

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Image source={require("./assets/splash.png")} style={styles.icon} />
//     //   <Text style={styles.top}>North South University</Text>
//     // </View>
//     <View styles={styles.boxstyle}>
//       <View style={styles.box}>Hello1</View>
//       <View style={styles.box}>Hello2</View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   boxstyle: {
//     flex: 1,
//     flexDirection: "column",
//     flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   box: {
//     width: "45%",
//     height: 100,
//     margin: "2.5%",
//     backgroundColor: "red",
//   },

//   // box: {
//   //   height: 100,
//   //   width: 100,
//   //   backgroundColor: 'red',
//   //   margin: 30,
//   //   padding: 30,
//   //   textAlign: "center",
//   //   borderRadius: 20,
//   // },
//   // box2: {
//   //   height: 100,
//   //   width: 100,
//   //   backgroundColor: 'red',
//   //   marginLeft: 200,
//   //   padding: 30,
//   //   borderRadius: 20,
//   // },
//   top: {
//     paddingLeft: 120,
//   },
//   icon: {
//     width: "50%",
//     height: "20%",
//     //margintop: 20,
//     //paddingtop: 20,
//     paddingLeft: 100,
//     backgroundColor: "blue",
//   },
// });



// boxs view pages

// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//       {/* 1st div */}
//       <View style={styles.row}>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//       </View>

//       {/* 2nd div */}
//       <View style={styles.row}>
//         <View style={styles.box}>
//         </View>
//         <View style={styles.box}></View>
//       </View>

//       {/* 3rd div */}
//       <View style={styles.row}>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%',
//     marginBottom: 20,
//   },
//   box: {
//     width: '45%',
//     height: 100,
//     backgroundColor: 'red',
//     borderRadius: 20,
//   },
// });


// sign up page code 


// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// export default function SignUp() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 10,
//   },
//   button: {
//     width: '80%',
//     height: 50,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



// login page 

// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 10,
//   },
//   button: {
//     width: '25%',
//     height: 40,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


