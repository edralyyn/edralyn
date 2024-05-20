import React from 'react';
import { View, Button } from 'react-native';

const BottomNavbar = ({ navigateToScreen }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 1, borderTopColor: 'gray' }}>
      <Button title="Screen 1" onPress={() => navigateToScreen('Screen1')} />
      <Button title="Screen 2" onPress={() => navigateToScreen('Screen2')} />
      <Button title="Screen 3" onPress={() => navigateToScreen('Screen3')} />
    </View>
  );
};

export default BottomNavbar;
