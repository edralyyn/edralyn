import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import News from './screens/News';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import BottomNavbar from './components/Navbar';
import Email from './screens/Email';
import ProfileScreen from './screens/Profile';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [isGuest, setIsGuest] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setIsGuest(false);
    setCurrentScreen('Home');
  };

  const continueAsGuest = () => {
    setLoggedIn(true);
    setIsGuest(true);
    setCurrentScreen('Screen2');
  };

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
      {!loggedIn ? (
        <>
          {currentScreen === 'Login' && <LoginScreen onLogin={handleLogin} navigateToScreen={navigateToScreen} continueAsGuest={continueAsGuest} />}
          {currentScreen === 'Email' && <Email onLogin={handleLogin} />}
        </>
      ) : (
        <>
          {currentScreen === 'Home' && <HomeScreen navigateToScreen={navigateToScreen} />}
          {currentScreen === 'News' && <News navigateToScreen={navigateToScreen} />}
          {currentScreen === 'Screen2' && <Screen2 hideNavbar={true} isGuest={isGuest} navigateToScreen={navigateToScreen} />}
          {currentScreen === 'Screen3' && <Screen3 />}
          {currentScreen === 'Screen4' && <Screen4 />}
          {currentScreen === 'Profile' && <ProfileScreen />}
          {currentScreen !== 'Screen2' && <BottomNavbar navigateToScreen={navigateToScreen} />}
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
