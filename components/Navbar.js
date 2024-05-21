// components/Navbar.js

import React from 'react';
import { View, TouchableOpacity, Button, Dimensions, StyleSheet } from 'react-native';

const BottomNavbar = ({ navigateToScreen }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.bottomNavbar, { width: screenWidth }]}>
      <View style={{ flex: 1, maxWidth: screenWidth / 5 }}>
        <Button title="Home" onPress={() => navigateToScreen('Home')} />
      </View>
      <View style={{ flex: 1, maxWidth: screenWidth / 5 }}>
        <Button title="Screen 1" onPress={() => navigateToScreen('Screen1')} />
      </View>
      <View style={[styles.circularContainer, { width: screenWidth / 5 }]}>
        <TouchableOpacity
          onPress={() => navigateToScreen('Screen2')}
          style={styles.circularButton}
        >
          <Button title="Screen 2" onPress={() => navigateToScreen('Screen2')} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, maxWidth: screenWidth / 5 }}>
        <Button title="Screen 3" onPress={() => navigateToScreen('Screen3')} />
      </View>
      <View style={{ flex: 1, maxWidth: screenWidth / 5 }}>
        <Button title="Screen 4" onPress={() => navigateToScreen('Screen4')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff', // Add background color to navbar
  },
  circularContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: Dimensions.get('window').width / 5 / 2, // Ensures it's a circle
  },
  circularButton: {
    width: '100%', // Take up the full width of the container
    height: '100%', // Take up the full height of the container
  },
});

export default BottomNavbar;
