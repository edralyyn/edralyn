import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Dimensions, PanResponder, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BackGround from '../components/Bred.js';

const { height } = Dimensions.get('window');

const Screen2 = ({ navigateToScreen, isGuest }) => {
  const initialHeight = height * 0.75;
  const expandedHeight = height * 0.95;
  const animatedValue = useRef(new Animated.Value(initialHeight)).current;

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      console.log('Image URI: ', result.uri);
      // Handle the captured image URI as needed
    }
  };

  const handleGalleryOpen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access gallery is required!');
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: true, // Enable multiple selection
    });
  
    if (!result.cancelled) {
      console.log('Images selected: ', result.uris);
      // Handle the selected image URIs as needed
    }
  };  

  const goToHome = () => {
    navigateToScreen('Home');
  };

  return (
    <BackGround>
      <Animated.View
        style={[styles.bottomSheet, { height: animatedValue }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.indicator} />
        <View style={styles.container}>
          <Text>Hi, I'm Screen 2</Text>
          {!isGuest && (
            <TouchableOpacity onPress={goToHome} style={styles.button}>
              <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.content}>
          <Text>This is the persistent off-canvas bottom sheet.</Text>
          <TouchableOpacity style={styles.button} onPress={handleCapture}>
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGalleryOpen}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 65,
  },
  indicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;
