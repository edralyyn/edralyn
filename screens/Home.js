import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ReportIcons from '../components/ReportIcons';
import screenStyles from '../components/styles/screenStyles';

const HomeScreen = ({ navigateToScreen }) => {
  return (
    <View style={screenStyles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: '#2A2D90', fontSize: 25, marginBottom: -5 }]}>Project</Text>
          <Text style={[styles.text, { color: '#7B0000', marginTop: -5 }]}>
            RE<Text style={{ color: '#FFB700', fontSize: 28 }}>SOLVE</Text>
          </Text>
        </View>
        <Image source={require('../assets/logos.png')} style={styles.image} />
      </View>
      <TouchableOpacity style={screenStyles.button} onPress={() => navigateToScreen('Profile')}>
        <Text style={screenStyles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
      <ReportIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1, // Take up remaining space
    alignItems: 'flex-start', // Align the text to the end (right)
  },
  image: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
  text: {
    fontSize: 35,
    fontWeight: '800',
  }
});

export default HomeScreen;
