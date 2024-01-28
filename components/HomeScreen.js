import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

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
    const { username } = route.params;
    
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
