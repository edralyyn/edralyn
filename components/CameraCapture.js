import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import screenStyles from '../components/styles/screenStyles';

const CameraCapture = () => {
  const handleCapture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      videoMaxDuration: 30,
    });

    if (!result.cancelled) {
      if (result.type === 'image') {
        console.log('Picture taken: ', result.uri);
      } else if (result.type === 'video') {
        console.log('Video taken: ', result.uri);
      }
    }
  };

  return (
    <TouchableOpacity style={screenStyles.button} onPress={handleCapture}>
      <Text style={screenStyles.whiteText}>Capture</Text>
    </TouchableOpacity>
  );
};

export default CameraCapture;
