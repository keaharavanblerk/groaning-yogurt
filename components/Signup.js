import React, { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { firebase } from './firebase/config';
function Signup() {
  const [fname, setFname] = useState('ds');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const Signed = () => {
    alert('adxas');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Signed in');
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(fname) => setFname(fname)}
        placeholder="Fullname and Surname"
      />
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
      <TextInput
        style={styles.input}
        onChangeText={(cpassword) => setConfPassword(cpassword)}
        placeholder=" Confirm Password"
      />
      <Button title="Sign Up" onPress={Signed} />
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 5,
    height: 40,
    paddingLeft: 10,
  },
});
