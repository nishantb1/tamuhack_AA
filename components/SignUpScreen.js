import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';
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
    <View>
    <TextInput
        //style={styles.input}
        placeholder="Username"
        //value={username}
        //onChangeText={setUsername}
        autoCapitalize="none"
    />
    <TextInput
        //style={styles.input}
        placeholder="Password"
        secureTextEntry
        //value={password}
        //onChangeText={setPassword}
        autoCapitalize="none"
    />
    <TextInput
        //style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        //value={passwordConfirm}
        //onChangeText={setPasswordConfirm}
        autoCapitalize="none"
    />
    <Button
        title="SignUp"
        onPress={handleSignUp}
    />
    </View>
);
}

export default SignUpScreen;