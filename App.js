import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import News from './screens/News';
import Report from './screens/Report';
import Notif from './screens/Notif';
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
    setCurrentScreen('Report');
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
          {currentScreen === 'Report' && <Report hideNavbar={true} isGuest={isGuest} navigateToScreen={navigateToScreen} />}
          {currentScreen === 'Notif' && <Notif />}
          {currentScreen === 'Profile' && <ProfileScreen />}
          {currentScreen !== 'Report' && <BottomNavbar navigateToScreen={navigateToScreen} />}
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
