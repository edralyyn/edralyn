import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import BackGround from '../components/Bred.js'

const Screen2 = ({ navigateToScreen, isGuest }) => { // Receive isGuest prop
  const goToHome = () => {
    navigateToScreen('Home');
  };

  return (
    <BackGround>
    <View style={styles.bottomform}>
      <Text>Hi, I'm Screen 2</Text>
      {!isGuest && ( // Only show button if not a guest
        <TouchableOpacity onPress={goToHome} style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      )}
    </View>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomform: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default Screen2;
