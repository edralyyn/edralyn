import React, { useEffect } from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import SubmitReport from '../components/SubmitReport';
import CameraCapture from '../components/CameraCapture';
import GalleryUpload from '../components/GalleryUpload';
import * as ImagePicker from 'expo-image-picker';
import ReportIcons from '../components/ReportIcons';
import AnimatedBottomSheet from '../components/AnimatedBottomSheet';

const { height } = Dimensions.get('window');

const Screen2 = ({ navigateToScreen, isGuest }) => {
  useEffect(() => {
    // Request camera permissions when component mounts
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera is required!');
      }
    })();
  }, []);

  return (
    <Background>
      <View style={screenStyles.titlecontainer}>
        <Text style={screenStyles.titleline1}>Report a</Text>
        <Text style={screenStyles.titleline2}>DISASTER</Text>
      </View>
      <AnimatedBottomSheet
        initialHeight={height * 0.8}
        expandedHeight={height}
        onClose={() => navigateToScreen('Home')}
        isGuest={isGuest} // Pass the isGuest prop
      >
        <View style={screenStyles.container}>
          <Text>Type of Disaster:</Text>
          <ReportIcons />
          <Text>Share Location</Text>
          <TextInput
            style={screenStyles.textInput}
            placeholder="Type location"
            multiline={true}
          />
          <Text>Other details:</Text>
          <TextInput
            style={screenStyles.textInput}
            multiline={true}
          />
          <View style={screenStyles.rowContainer}>
            <CameraCapture />
            <Text style={screenStyles.orText}>or</Text>
            <GalleryUpload />
          </View>
          <SubmitReport />
        </View>
      </AnimatedBottomSheet>
    </Background>
  );
};

export default Screen2;
