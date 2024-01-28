import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';import {Dimensions} from 'react-native';
import { useFonts } from 'expo-font';

function HomeScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'frutiga': require('./SwitzeraADF-Regular.ttf'),
    });

    const CustomButton = ({ onPress, title }) => (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
          <Text style={styles.customButtonText}>{title}</Text>
        </TouchableOpacity>
      );

    // If fonts are not loaded, return null or a different component
    // to avoid showing unstyled text
    if (!fontsLoaded) {
        return null; // Or a loading spinner, or some fallback component
    }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('../assets/Sky_Score-modified_1.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>Elevate Your Journey</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title="Go to Chatbot" onPress={() => navigation.navigate('Chatbot')} />
            <CustomButton title="Go to Map" onPress={() => navigation.navigate('Map', {})} />
            <CustomButton title="Go to Leaderboard" onPress={() => navigation.navigate('LeaderboardScreen')} />
          </View>
          <CustomButton title="Logout" onPress={() => navigation.replace('Login')} />
        </SafeAreaView>
      );
    }
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    padding: 20,
    },
    header: {
    alignItems: 'center',
    },
    logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    },
    text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    },
    buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    },
    customButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'center',
    },
    customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
});

export default HomeScreen;