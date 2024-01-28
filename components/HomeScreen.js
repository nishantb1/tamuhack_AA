import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import { useFonts } from 'expo-font';


function HomeScreen({ navigation, route }) {
    const { username } = route.params;
    const [fontsLoaded] = useFonts({
    'frutiga': require('./SwitzeraADF-Regular.ttf'),
    });
    return (
        <View style={styles.container}>
            <Text> Home Screen </Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingHorizontal: 16,
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginTop: 5,
        borderRadius: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#45586a',
        fontFamily: 'frutiga',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
    },
    logoutButton: {
        backgroundColor: '#13128B',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


export default HomeScreen;
