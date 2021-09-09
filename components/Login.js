import React, { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { firebase } from './firebase/config';
function Login({ navigation }) {
  const [fname, setFname] = useState('ds');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const Logged = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Signed in');
        var user = userCredential.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        placeholder="Password"
      />
      <Button title="Login" onPress={Logged} />
      <View style={styles.button}>
        {' '}
        <Button
          title="Signup"
          onPress={() => navigation.navigate('Signup')}
          style={{ marginTop: 8 }}
        />
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 5,
    height: 40,
    paddingLeft: 10,
    backgroundColor:"white"
  },
  button: {
    marginTop: 8,
  },
container: {
  backgroundColor:"#a4b3b6",
  height:"100vh"
}
});
