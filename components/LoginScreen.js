import React, { useState } from 'react';
import {Dimensions} from 'react-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('Logged in');
        navigation.navigate(HomeScreen);
      } else {
        console.log('Failed to log in:', data.message);
      }
    })
    .catch(error => {
      console.error('Error', error);
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png',
        }}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    logo: {
      width: 393,
      height: 150,
      marginTop: Dimensions.get('window').height / 2 - 150,
    },
    input: {
      height: 40,
      width: '80%',
      marginVertical: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: '#ddd',
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    button: {
      width: '80%',
      marginTop: 20,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
  });
  

export default LoginScreen;
