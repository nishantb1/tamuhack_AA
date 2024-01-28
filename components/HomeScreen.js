import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text> Home Screen </Text>
            <Button onPress={() => navigation.navigate('Details')} title='Go to Details'/>
            <Button onPress={() => navigation.navigate('Map')} title='Go to Map'/>
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
});

export default HomeScreen;
