import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Background = ({ children, color }) => {
  const imageUrl = require('../assets/bgresolve.png');
  const backgroundColorStyle = color ? { backgroundColor: color } : tw`bg-red-800`;

  return (
    <View style={[tw`flex-1`, backgroundColorStyle]}>
      <ImageBackground
        source={imageUrl}
        style={tw`flex-1`}
      >
        <View style={tw`flex-1 bg-opacity-50`}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;
