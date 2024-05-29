import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const GalleryUpload = ({ onUpload }) => {
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
        onUpload('image', result.selected ? result.selected.map(file => file.uri) : [result.uri]);
      }
    } catch (error) {
      console.error('Error selecting images:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleGalleryOpen}>
      <Image source={require('../assets/upload.png')} />
    </TouchableOpacity>
  );
};

export default GalleryUpload;
