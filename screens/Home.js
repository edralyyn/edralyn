// screens/Home.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ReportIcons from '../components/ReportIcons';

const HomeScreen = ({ navigateToScreen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      {/* You can add your home screen components here */}
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Profile')}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
      <ReportIcons/>
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
    backgroundColor: '#007BFF',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default HomeScreen;
