import React, { useRef, useEffect } from 'react';
import { Text, View, Animated, Image, Dimensions, PanResponder, TouchableOpacity } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import SubmitReport from '../components/SubmitReport';
import CameraCapture from '../components/CameraCapture';
import GalleryUpload from '../components/GalleryUpload';
import * as ImagePicker from 'expo-image-picker';

const { height } = Dimensions.get('window');

const Screen2 = ({ navigateToScreen, isGuest }) => {
  const initialHeight = height * 0.8;
  const expandedHeight = height;
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

  const closeBottomSheet = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      // Navigate to the home screen after the animation completes
      navigateToScreen('Home');
    });
  };

  // Conditionally apply styles based on bottom sheet height
  const bottomSheetStyle = {
    ...screenStyles.bottomSheet,
    height: animatedValue,
  };

  // Apply borderTopLeftRadius only when the bottom sheet is not fully expanded
  if (animatedValue._value !== expandedHeight) {
    bottomSheetStyle.borderTopLeftRadius = animatedValue.interpolate({
      inputRange: [0, expandedHeight],
      outputRange: [0, 65],
      extrapolate: 'clamp',
    });
  }

  return (
    <Background>
      <Animated.View style={[bottomSheetStyle]} {...panResponder.panHandlers}>
        <View style={{ alignItems: 'flex-end', paddingRight: 10, paddingTop: 10 }}>
          {!isGuest && (
            <TouchableOpacity onPress={closeBottomSheet}>
              <Image source={require('../assets/close.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          )}
        </View>
        <View style={screenStyles.container}>
          <Text>Type of Disaster:</Text>
        </View>
        <View style={screenStyles.container}>
          <Text>This is the persistent off-canvas bottom sheet.</Text>
          <View style={screenStyles.rowContainer}>
          <CameraCapture />
          <Text style={screenStyles.orText} >or</Text>
          <GalleryUpload />
          </View>
          <SubmitReport />
        </View>
      </Animated.View>
    </Background>
  );
};

export default Screen2;
