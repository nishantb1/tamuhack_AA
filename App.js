import { StyleSheet, Text, View, Button, TextInput, Style, SafeAreaView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './components/MapScreen'
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import SignUpScreen from './components/SignUpScreen';
import { GiftedChat } from 'react-native-gifted-chat';
import Chatbot from './components/chatbot';

const Stack = createNativeStackNavigator();

export default function App() {
  //const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      //let location = await Location.getCurrentPositionAsync();
      //setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } /*else if (location) {
    console.log(location);
  }
  */

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name = "Login" component={LoginScreen}/> 
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Details" component={DetailsScreen} />
        <Stack.Screen name = "Map" component={MapScreen} />
        <Stack.Screen name = "LeaderboardScreen" component={LeaderboardScreen} />
        <Stack.Screen name = "SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <Chatbot />
    </>
  );
}





function DetailsScreen({navigation}) {
  return (
    <View>
    <Text> this is details </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer: {
    flex: 1, 
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  
});
