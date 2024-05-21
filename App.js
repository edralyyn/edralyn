//App.js

import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import BottomNavbar from './components/Navbar';
import Email from './screens/Email';
import ProfileScreen from './screens/Profile';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Login');

  const handleLogin = () => {
    setLoggedIn(true);
    setCurrentScreen('Home');
  };

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {!loggedIn ? (
        <>
          {currentScreen === 'Login' && <LoginScreen onLogin={handleLogin} navigateToScreen={navigateToScreen} />}
          {currentScreen === 'Email' && <Email onLogin={handleLogin} />}
        </>
      ) : (
        <>
          {currentScreen === 'Home' && <HomeScreen navigateToScreen={navigateToScreen} />}
          {currentScreen === 'Screen1' && <Screen1 />}
          {currentScreen === 'Screen2' && <Screen2 />}
          {currentScreen === 'Screen3' && <Screen3 />}
          {currentScreen === 'Screen4' && <Screen4 />}
          {currentScreen === 'Profile' && <ProfileScreen />}
          <BottomNavbar navigateToScreen={navigateToScreen} />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
