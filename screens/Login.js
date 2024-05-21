// screens/Login.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Background from '../components/Bred';

const { height } = Dimensions.get('window');

const LoginScreen = ({ onLogin, navigateToScreen, continueAsGuest }) => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <Background>
      <View style={styles.bottomform}>
        <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={onLogin}>
          <Image source={require('../assets/google_logo.png')} style={styles.buttonLogo} />
          <Text style={[styles.buttonText, styles.grayText]}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={onLogin}>
          <Image source={require('../assets/facebook_logo.png')} style={styles.buttonLogo} />
          <Text style={[styles.buttonText, styles.whiteText]}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.guestButton]} onPress={continueAsGuest}>
          <Image source={require('../assets/guest_logo.png')} style={styles.buttonLogo} />
          <Text style={[styles.buttonText, styles.whiteText]}>Continue as Guest</Text>
        </TouchableOpacity>
        <Text style={[styles.orText, styles.grayText]}> ⎯⎯⎯⎯⎯⎯  or Login with ⎯⎯⎯⎯⎯⎯ </Text>
        <TouchableOpacity style={[styles.button, styles.emailButton]} onPress={() => navigateToScreen('Email')}>
          <Image source={require('../assets/email_logo.png')} style={styles.buttonLogo} />
          <Text style={[styles.buttonText, styles.emailButtonText]}>Continue with email</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  bottomform: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: Dimensions.get('window').height * 0.6, // Minimum height is 60% of the screen height
    maxHeight: Dimensions.get('window').height * 0.6, // Maximum height is also 60% of the screen height
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20, // Add padding to prevent content compression
  },  
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: height * 0.6,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    flexDirection: 'row',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  whiteText: {
    color: '#FFF',
  },
  grayText: {
    color: '#858484',
  },
  googleButton: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    borderColor: '#858484',
    borderWidth: 1,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  guestButton: {
    backgroundColor: '#969696',
  },
  emailButton: {
    backgroundColor: '#FFF',
    borderColor: '#9D1111',
    borderWidth: 1,
  },
  emailButtonText: {
    fontSize: 16,
    color: '#9D1111',
  },
  orText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
});

export default LoginScreen;
