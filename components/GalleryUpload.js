import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import screenStyles from '../components/styles/screenStyles';

const GalleryUpload = () => {
  const handleGalleryOpen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access gallery is required!');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsMultipleSelection: true,
      });

      if (!result.cancelled) {
        console.log('Images selected: ', result.uris);
      }
    } catch (error) {
      console.error('Error selecting images:', error);
    }
  };

  return (
    <TouchableOpacity style={screenStyles.button} onPress={handleGalleryOpen}>
      <Text style={screenStyles.buttonText}>Upload</Text>
    </TouchableOpacity>
  );
};

export default GalleryUpload;
