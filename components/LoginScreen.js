import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import { StyleSheet, Text, View, Button, TextInput, Image, Alert } from 'react-native';
import HomeScreen from './HomeScreen'
import * as FileSystem from 'expo-file-system';
import usersFile from './users.json'
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [loggedIn, setLoggedin] = useState(false);
//   const handleLogin = () => {
//     fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         console.log('Logged in');
//         navigation.navigate(HomeScreen);
//       } else {
//         console.log('Failed to log in:', data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error', error);
//     });
//   };

    const handleLogin = async () => {
        if (username === 'admin' && password === 'admin'){
            navigation.replace('Home')
        } else {
            try {
                console.log('before')


                //const users = JSON.parse(usersFile);
                const user = usersFile.find((u) => u.username === username);
                if (user && user.password === password) {
                    navigation.replace('Home', { username });

                } else {
                    console.log('Invalid user or password');
                }
            } catch (error) {
                console.error('Error reading or parsing users.json?', error);
            }
//            Alert.alert('Login failed');
        }
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }


  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png',
        }}
        style={styles.logo}
      />
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
      <Button 
        title="Sign Up"
        onPress={handleSignUp}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dfdfdf',
      padding: 20,
    },
    logo: {
      width: 393,
      height: 150,
      marginTop: Dimensions.get('window').height / 2 - 490,
      marginBottom: 30,
    },
    input: {
      height: 40,
      width: '80%',
      marginBottom: 25,
      marginVertical: 5,
      borderWidth: 1,
      padding: 10,
      borderColor: '#ddd',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
  });
  

export default LoginScreen;