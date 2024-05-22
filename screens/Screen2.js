import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Dimensions, PanResponder } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BackGround from '../components/Bred.js';
import screenStyles from '../components/styles/screenStyles.js';
import SubmitReport from '../components/SubmitReport.js';

const { height } = Dimensions.get('window');

const Screen2 = ({ navigateToScreen, isGuest }) => {
  const initialHeight = height * 0.8;
  const expandedHeight = height * 0.95;
  const animatedValue = useRef(new Animated.Value(initialHeight)).current;
  const [modalVisible, setModalVisible] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        let newHeight = initialHeight - gestureState.dy;
        if (newHeight < initialHeight) newHeight = initialHeight;
        animatedValue.setValue(newHeight);
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < 0) {
          Animated.spring(animatedValue, {
            toValue: expandedHeight,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(animatedValue, {
            toValue: initialHeight,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera is required!');
      }
    })();
  }, []);

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
      videoQuality: 0,
      video: true,
    });
  
    if (!result.cancelled) {
      if (result.type === 'image') {
        console.log('Picture'); // Log when a picture is taken
        console.log('Image URI: ', result.uri);
        // Handle the captured image URI as needed
      } else if (result.type === 'video') {
        console.log('Video'); // Log when a video is taken
        console.log('Video URI: ', result.uri);
        // Handle the captured video URI as needed
      }
    }
  };
  
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
        allowsMultipleSelection: true, // Enable multiple selection
      });
  
      if (!result.cancelled) {
        if (result?.uris && result.uris.length > 0) {
          if (result.uris.length === 1) {
            console.log('Photo upload'); // Log when a single photo is uploaded
          } else {
            console.log(`Uploaded ${result.uris.length} photos`); // Log when multiple photos are uploaded
          }
          console.log('Images selected: ', result.uris);
          // Handle the selected image URIs as needed
        }
      }
    } catch (error) {
      console.error('Error selecting images:', error); // Log the error if there's an issue with selecting images
    }
  };  

  const goToHome = () => {
    navigateToScreen('Home');
  };

  const submitReport = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <BackGround>
      <Animated.View
        style={[screenStyles.bottomSheet, { height: animatedValue }]}
        {...panResponder.panHandlers}
      >
        <View style={screenStyles.indicator} />
        <View style={screenStyles.container}>
          <Text>Hi, I'm Screen 2</Text>
          {!isGuest && (
            <TouchableOpacity onPress={goToHome} style={screenStyles.button}>
              <Text style={screenStyles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={screenStyles.content}>
          <Text>This is the persistent off-canvas bottom sheet.</Text>
          <TouchableOpacity style={screenStyles.button} onPress={handleCapture}>
            <Text style={screenStyles.buttonText}>Capture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={screenStyles.button} onPress={handleGalleryOpen}>
            <Text style={screenStyles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <SubmitReport/>
        </View>
      </Animated.View>
    </BackGround>
  );
};

export default Screen2;
