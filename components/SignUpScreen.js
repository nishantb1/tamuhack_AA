import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignUp = () => {
    if (password !== passwordConfirm) {
      alert('Error', 'Passwords do not match.');
      return;
    }

    // Perform any additional validation if needed

    // If everything is valid, show success message
    setShowSuccess(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s202.q4cdn.com/986123435/files/doc_downloads/logos/american-airlines/THUMB-aa_aa__ahz_4cp_grd_pos-(1).png',
        }}
        style={styles.logo}
      />
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        placeholder="Confirm password"
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={handleSignUp}
      />
      {showSuccess && <Text style={styles.successText}>Sign up successful!</Text>}
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
    marginBottom: 30,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '80%',
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  successText: {
    color: 'green',
    marginTop: 10,
  },
});

export default SignUpScreen;
