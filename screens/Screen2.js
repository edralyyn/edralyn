import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Screen2 = ({ navigateToScreen, isGuest }) => { // Receive isGuest prop
  const goToHome = () => {
    navigateToScreen('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Hi, I'm Screen 2</Text>
      {!isGuest && ( // Only show button if not a guest
        <TouchableOpacity onPress={goToHome} style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      )}
    </View>
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
});

export default Screen2;
