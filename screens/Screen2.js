import React, { useRef, useState, useEffect } from 'react';
import { Text, View, Animated, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import SubmitReport from '../components/SubmitReport';
import CameraCapture from '../components/CameraCapture';
import GalleryUpload from '../components/GalleryUpload';
import * as ImagePicker from 'expo-image-picker';

const { height } = Dimensions.get('window');

const Screen2 = ({ navigateToScreen, isGuest }) => {
  const initialHeight = height * 0.8;
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
        Animated.spring(animatedValue, {
          toValue: gestureState.dy < 0 ? expandedHeight : initialHeight,
          useNativeDriver: false,
        }).start();
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

  const goToHome = () => {
    navigateToScreen('Home');
  };

  return (
    <Background>
      <Animated.View style={[screenStyles.bottomSheet, { height: animatedValue }]} {...panResponder.panHandlers}>
        <View style={screenStyles.indicator} />
        <View style={screenStyles.container}>
          <Text>Type of Disaster:</Text>
          {!isGuest && (
            <TouchableOpacity onPress={goToHome} style={screenStyles.button}>
              <Text style={screenStyles.whiteText}>Go to Home</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={screenStyles.container}>
          <Text>This is the persistent off-canvas bottom sheet.</Text>
          <CameraCapture />
          <GalleryUpload />
          <SubmitReport />
        </View>
      </Animated.View>
    </Background>
  );
};

export default Screen2;
