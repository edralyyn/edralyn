import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Email = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email page</Text>
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Continue with email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#9D1111',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Email;
