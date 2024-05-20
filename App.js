import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Background from './components/Bred';
import BottomNavbar from './components/Navbar';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Home');

  const handleLogin = () => {
    // For demo purposes, just setting loggedIn to true
    setLoggedIn(true);
  };

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <Background>
      <View style={styles.container}>
        {!loggedIn ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <>
            {currentScreen === 'Home' && <HomeScreen />}
            {currentScreen === 'Screen1' && <Screen1 />}
            {currentScreen === 'Screen2' && <Screen2 />}
            {currentScreen === 'Screen3' && <Screen3 />}
            {/* Bottom Navbar */}
            <BottomNavbar navigateToScreen={navigateToScreen} />
          </>
        )}
        <StatusBar style="auto" />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
