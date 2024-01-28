import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import { useFonts } from 'expo-font';

// function HomeScreen({navigation, route}) {
//     const { username } = route.params;
//     console.log(username); 
//     return (
//       <View>
//         <Text> {username} </Text>
//         <Button onPress = {() => navigation.navigate('Details')} title='go to details'/>
//         <Button onPress = {() => navigation.navigate('Map', { username })} title='go to map'/>
//         <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }} onPress={() => navigation.replace('Login')}>
//   <Text onPress = {() => navigation.replace('Login')}style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
// </TouchableOpacity>      
//     </View>
function HomeScreen({ navigation, route }) {
    // const { username } = route.params;
    const [fontsLoaded] = useFonts({
    'frutiga': require('./SwitzeraADF-Regular.ttf'),
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Your flights with </Text>
            <Image
                source={{
                    uri: 'https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png',
                }}
            style={styles.logo}
            />
            <Button onPress={() => navigation.navigate('Details')} title='Go to Details'/>
            <Button onPress={() => navigation.navigate('Map', {})} title='Go to Map'/>
            <Button onPress={() => navigation.navigate('LeaderboardScreen')} title='Go to Leaderboard'/>
            <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: 'blue', 
        padding: 10, 
        borderRadius: 5,
        marginTop: 10, // Add some margin at the top for spacing
    },
    logoutText: {
        color: 'white', 
        fontWeight: 'bold',
    },
    text: {
        color: 'black', 
        fontWeight: 'bold',
        marginBottom: 60,
        fontSize: 40,
        color: '#45586a',
        fontFamily: 'frutiga',
    },
    logo: {
      width: 393,
      height: 150,
      marginTop: Dimensions.get('window').height / 2 - 490,
      marginBottom: 30,
    },
});

export default HomeScreen;
