import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Dimensions, PanResponder } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import BackGround from '../components/Bred.js';

const { height } = Dimensions.get('window');

const Screen2 = ({ navigateToScreen, isGuest }) => {
  const initialHeight = height * 0.75;
  const expandedHeight = height * 0.95;
  const animatedValue = useRef(new Animated.Value(initialHeight)).current;
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false); // State to manage camera visibility
  const cameraRef = useRef(null);

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

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const handleCapture = async () => {
    setShowCamera(true); // Display camera when "Capture" button is pressed
  };

  const handleGalleryOpen = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        
        if (!result.cancelled) {
          console.log('Image selected:', result.uri);
          // Handle the selected image URI as needed
        }
      } else {
        alert('Permission to access gallery is required!');
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
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
      {/* Conditionally render CameraView based on showCamera state */}
      {showCamera && permission && permission.granted && (
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing={facing}
          autoFocus="on"
        />
      )}
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCameraFacing}>
          <Text style={styles.toggleButtonText}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
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
  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  toggleButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Screen2;
