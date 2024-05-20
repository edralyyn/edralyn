import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

export default LoginScreen;
