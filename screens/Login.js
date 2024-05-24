import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';

const LoginScreen = ({ onLogin, navigateToScreen, continueAsGuest }) => {
  const socialButtons = [
    { id: 1, label: 'Continue with Google', image: require('../assets/google_logo.png'), style: screenStyles.googleButton },
    { id: 2, label: 'Continue with Facebook', image: require('../assets/facebook_logo.png'), style: screenStyles.facebookButton },
    { id: 3, label: 'Continue as Guest', image: require('../assets/guest_logo.png'), style: screenStyles.guestButton },
  ];

  return (
    <Background>
      <View style={screenStyles.bottomform}>
        {socialButtons.map(({ id, label, image, style }) => (
          <TouchableOpacity key={id} style={[screenStyles.loginbutton, style]} onPress={id === 3 ? continueAsGuest : onLogin}>
            <Image source={image} style={screenStyles.buttonLogo} />
            <Text style={[screenStyles.buttonText, id === 1 ? screenStyles.grayText : screenStyles.whiteText]}>{label}</Text>
          </TouchableOpacity>
        ))}
        <Text style={[screenStyles.orText, screenStyles.grayText]}> ⎯⎯⎯⎯⎯⎯  or Login with ⎯⎯⎯⎯⎯⎯ </Text>
        <TouchableOpacity style={[screenStyles.loginbutton, screenStyles.emailButton]} onPress={() => navigateToScreen('Email')}>
          <Image source={require('../assets/email_logo.png')} style={screenStyles.buttonLogo} />
          <Text style={[screenStyles.buttonText, screenStyles.emailButtonText]}>Continue with email</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default LoginScreen;