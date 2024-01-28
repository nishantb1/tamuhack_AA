import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import fileData from "./users.json"; // Update the path to the correct location of your users.json file
const MapScreen = ({ route }) => {
  const mapViewRef = React.useRef();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const { username } = route.params;
  console.log(username);
  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });

      if (location && location.coords) {
        const tempLocation = { ...location };
        setCurrentLocation(tempLocation);
        setMarkers([
          ...markers,
          <Marker
            key={markers.length}
            coordinate={{
              latitude: tempLocation.coords.latitude,
              longitude: tempLocation.coords.longitude,
            }}
            title="Current Location"
            description="You are here"
          />
        ]);
        // save location to users.json
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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

  const loadMarkers = (username) => {
    const user = fileData.find((user) => user.username === username);
  
    if (user && user.coordinates) {
      const userMarkers = user.coordinates.map((coord, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: coord[0],
            longitude: coord[1],
          }}
          title={user.username}
          description={`Point ${index + 1}`}
        />
      ));
  
      setMarkers(userMarkers);
    }
  };
  
  const loadGlobalMarkers = () => {
    console.log('Supposed to load global markers');
    
    const globalMarkers = fileData.flatMap((user) => {
      if (user.coordinates) {
        return user.coordinates.map((coord, index) => (
          <Marker
            key={`${user.username}_${index}`}
            coordinate={{
              latitude: coord[0],
              longitude: coord[1],
            }}
            title={user.username}
            description={`Point ${index + 1}`}
          />
        ));
      }
      return [];
    });
  
    setMarkers(globalMarkers); // Update the markers state
  };
  

  return (
    <View>
      <MapView ref={mapViewRef} style={styles.map}>
        {markers}
      </MapView>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={getCurrentLocation}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Get Location
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loadMarkersButton}
        onPress={() => loadMarkers(username)}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          My Markers
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loadGlobalButton}
        onPress={loadGlobalMarkers}
      >
        <Text style={{color: "white", fontWeight: "bold"}}>
          Load Global Markers
        </Text>
        </TouchableOpacity>
        
      {/* Add more buttons to load markers for other users */}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  locationButton: {
    backgroundColor: "#3781b0",
    borderColor: "#3781b0",
    borderRadius: 20,
    borderWidth: 15,
    position: "absolute",
    left: 20,
    bottom: 70,
  },
  loadMarkersButton: {
    backgroundColor: "#3781b0",
    borderColor: "#3781b0",
    borderRadius: 20, 
    borderWidth: 15,
    position: "absolute",
    left: 20,
    bottom: 130,
    shadowRadius: 100
  },
  loadGlobalButton: {
    backgroundColor: '#3781b0',
    borderColor: "#3781b0",
    borderRadius: 20, 
    borderWidth: 15,
    position: "absolute",
    left: 20,
    bottom: 190, 
  }
});

export default MapScreen;
