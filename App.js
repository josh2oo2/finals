import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import firebase from "firebase";
import { firebaseConfig } from './firebase/config';


//import "firebase/auth";
//import "firebase/firestore";

import Home from  './screens/Home';
//import Signin from './screens/Signin';
import Products from './screens/Products';
import FacebookSignin from './screens/FacebookSignin';
import Signin from './screens/Signin';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
}


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SignIn"
          component={Signin}
          options={{ title: 'Sign In sa JabEE' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '               Welcome'}}
        />
      
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ title: '         Pick Your Poison' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {


  return (
    <MyStack />

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <ScrollView>
    //   <View style={styles.container}>
    //   <StatusBar style="auto" />

    //     <Image 
    //     style={{width: 200, height: 200, marginTop:50}}
    //     source= {{uri: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"}}></Image>
    //     <Text 
    //      style={{
    //       height: 40,
    //       fontFamily: "sans-serif",
    //       marginTop: 10,
    //       marginBottom: 10,
    //       color: 'black'
    //     }}
    //     >Welcome to my E-commerce App</Text>
    //   </View>
    //   <TextInput
    //    style={{
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1
    //   }}
    //   placeholder="Enter something here" value="Inputted Value"/>

    // </ScrollView>

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