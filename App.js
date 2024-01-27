import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import React, {useState} from 'react';
import { View, TextInput, Button, Style, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

//Login Page
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('server_ip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    })
    .then(response => response.json())
    .then(data => {
      if(data === 'Login sucessful'){
        console.log('Logged in');
      } else{
        console.log('Failed to log in:', data);
      }
    })
    .catch(error => {
      console.error('Error', error);
    });
  };
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name = "Home" component={HomeScreen} />
        <Stack.Screen name = "Details" component={DetailsScreen} />
        <Stack.Screen name = "Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

function MapScreen({navigation}) {
  return (
    <View> 
      <MapView initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}styles={{width: '100%', height: '100%',}} />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text> Home Screen </Text>
      <Button onPress = {() => navigation.navigate('Details')} title='go to details'/>
      <Button onPress = {() => navigation.navigate('Map')} title='go to map'/>
    </View>
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
