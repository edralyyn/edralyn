import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Button } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

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
          <View style={styles.bottomNavbar}>
            <Button title="Screen 1" onPress={() => navigateToScreen('Screen1')} />
            <Button title="Screen 2" onPress={() => navigateToScreen('Screen2')} />
            <Button title="Screen 3" onPress={() => navigateToScreen('Screen3')} />
          </View>
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
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
});
