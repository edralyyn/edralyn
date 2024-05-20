import React from 'react';
import { View, ImageBackground } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Background = ({ children }) => {
  const imageUrl = require('../assets/bgresolve.png');

  return (
    <View style={tw`flex-1 bg-red-800`}>
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
