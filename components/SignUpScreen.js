import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
//import RNFS from 'react-native-fs';

const handleSignUp = () => {
  /*
    if (password !== passwordConfirm) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    const user = {
      username,
      password, 
      location: {
        latitude,
        longitude,
      },
    };
    const path = RNFS.DocumentDirectoryPath + 'users.json';

    RNFS.readFile(path)
      .then(contents => {
        const users = JSON.parse(contents);
        users.push(user);
        return RNFS.writeFile(path, JSON.stringify(users), 'utf8');
      })
      .then(() => {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('LoginScreen'); // Corrected this line
      })
      .catch(err => {
        if (err.code === 'ENOENT') {
          return RNFS.writeFile(path, JSON.stringify([user]), 'utf8');
        } else {
          console.error(err);
          Alert.alert('Error', 'There was an error registering the user');
        }
      });
      */
  };
const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        // value={username}
        // onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        // value={password}
        // onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        // value={passwordConfirm}
        // onChangeText={setPasswordConfirm}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;