import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraCapture = ({ onCapture }) => {
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
      onCapture(result.type, [result.uri]);
    }
  };

  return (
    <TouchableOpacity onPress={handleCapture}>
      <Image source={require('../assets/capture.png')} />
    </TouchableOpacity>
  );
};

export default CameraCapture;
