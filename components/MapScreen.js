import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

const MapScreen = () => {
    return (
      <View> 
        <MapView style={styles.map}/>
        <View style={styles.locationButton}>
          <Text style={{color:'white', fontWeight:'bold'}}onPress={handleSaveLocation}> Get Location </Text>
        </View>
        
      </View>
    );
  }

const handleSaveLocation = async () => {
  try {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  } catch (error) {
    console.log(error);
  }
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  },
  locationButton: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderRadius: 15,
    borderWidth: 15,
    position: 'absolute',
    left: 20,
    bottom: 70

  }
})
export default MapScreen;