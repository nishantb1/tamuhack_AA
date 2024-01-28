import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

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
            <Image 
                source={{
                    uri: 'https://cdn.discordapp.com/attachments/1200882082977685687/1201084520724697270/image.png?ex=65c88820&is=65b61320&hm=4d80da680343fcf7578136682a9bd0df8558240d2d60675dc022a05b68412abf&',
                }}
            style={styles.logo}
            />
            <Button onPress={() => navigation.navigate('Details')} title='Go to Details'/>
            <Button onPress={() => navigation.navigate('Map', {username})} title='Go to Map'/>
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
        padding: 120
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
    logo: {
      width: 393,
      height: 150,
      marginTop: Dimensions.get('window').height / 2 - 490,
      marginBottom: 30,
    },
});

export default HomeScreen;
