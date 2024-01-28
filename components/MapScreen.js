import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const mapViewRef = React.useRef();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [addMarker, setAddMarker] = useState(null);
  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });

      // Check if location is not null before setting state
      if (location && location.coords) {
        // Use a temporary variable to avoid null during state update
        const tempLocation = { ...location };
        setCurrentLocation(tempLocation);
        setAddMarker(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Use the effect to zoom when currentLocation changes
    zoomToCurrentLocation();
  }, [currentLocation]);

  const zoomToCurrentLocation = () => {
    if (currentLocation && currentLocation.coords) {
      mapViewRef.current.animateToRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

  return (
    <View>
      <MapView ref={mapViewRef} style={styles.map}>
        {setAddMarker && currentLocation && currentLocation.coords && (
          <Marker
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
            title="Current Location"
            description="You are here"
          />
        )}
      </MapView>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={getCurrentLocation}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Get Location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  locationButton: {
    backgroundColor: "blue",
    borderColor: "blue",
    borderRadius: 15,
    borderWidth: 15,
    position: "absolute",
    left: 20,
    bottom: 70,
  },
});

export default MapScreen;
