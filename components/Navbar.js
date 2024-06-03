// components/Navbar.js

import React from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native';

const BottomNavbar = ({ navigateToScreen }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={[styles.bottomNavbar, { width: screenWidth }]}>
      <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Image style={styles.logo} source={require('../assets/homebutton.png')} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigateToScreen('News')}>
          <Image style={styles.logo} source={require('../assets/newsbutton.png')} />
          <Text style={styles.navText}>News</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.circularContainer}>
        <TouchableOpacity
          onPress={() => navigateToScreen('Report')}
          style={styles.circularButton}
        >
          <Image style={styles.circularLogo} source={require('../assets/reportbutton.png')} />
        </TouchableOpacity>
        <Text style={styles.navText}>Report</Text>
      </View>
      <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigateToScreen('Notif')}>
          <Image style={styles.logo} source={require('../assets/notifbutton.png')} />
          <Text style={styles.navText}>Notif</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navItem}>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
          <Image style={styles.logo} source={require('../assets/profile.png')} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavbarContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: 0, // Adjust this if needed to ensure the shadow is visible
  },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    backgroundColor: '#fff',
    height: 70, // Adjust this to fit the circular button properly
    borderTopLeftRadius: 25, // Ensure the top corners are rounded
    borderTopRightRadius: 25, // Ensure the top corners are rounded
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 }, // Negative height to create a shadow at the top
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  navItem: {
    flex: 1,
    maxWidth: Dimensions.get('window').width / 5,
    alignItems: 'center',
  },
  circularContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -20, // Adjust this to position the button above the navbar
  },
  circularButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d9534f',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  navText: {
    color: 'black',
    fontSize: 12,
    marginTop: 2, // Adjust to give some space between the circular button and the text
  },
  logo: {
    width: 24,
    height: 24,
  },
});

export default BottomNavbar;
