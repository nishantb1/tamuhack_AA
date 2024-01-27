import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Style } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import React, {useState} from 'react';

const Stack = createNativeStackNavigator();

//Login Page

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
      <MapView style={styles.map}/>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View>
      <Text> Home Sasdfcreen </Text>
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
  map: {
    width: '100%',
    height: '100%',
  }
});
