import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Dimensions, ScrollView, Image, StyleSheet } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import SubmitReport from '../components/SubmitReport';
import CameraCapture from '../components/CameraCapture';
import GalleryUpload from '../components/GalleryUpload';
import * as ImagePicker from 'expo-image-picker';
import ReportIcons from '../components/ReportIcons';
import AnimatedBottomSheet from '../components/AnimatedBottomSheet';

const { height } = Dimensions.get('window');

const Report = ({ navigateToScreen, isGuest }) => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    // Request camera permissions when component mounts
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera is required!');
      }
    })();
  }, []);

  const handleAddAttachment = (type, uris) => {
    const newAttachments = uris.map((uri, index) => ({
      id: attachments.length + index + 1,
      type,
      uri,
    }));
    setAttachments([...attachments, ...newAttachments]);
  };

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
        <ScrollView>
          <View style={screenStyles.container}>
            <Text style={screenStyles.text}>Type of Disaster:</Text>
            <ReportIcons />
            <Text style={screenStyles.text}>Share Location:</Text>
            <TextInput
              style={{ ...screenStyles.textInput, paddingStart: 15, marginBottom: 20 }}
              placeholder="Type location"
              multiline={true}
            />
            <Text style={screenStyles.text}>Other details:</Text>
            <TextInput
              style={{ ...screenStyles.textInput, height: 120, marginBottom: 20 }}
              multiline={true}
            />
          </View>
          {attachments.length > 0 && (
            <View style={screenStyles.container}>
              <Text style={screenStyles.text}>Attachments:</Text>
              {attachments.map(attachment => (
                <View key={attachment.id} style={styles.attachment}>
                  <Image source={require('../assets/clip.png')}/>
                  <Text style={{marginStart: 5}}>
                    {`Attachment ${attachment.id}: ${attachment.type === 'image' ? 'Image' : 'Video'}`}
                  </Text>
                </View>
              ))}
            </View>
          )}
          <View style={screenStyles.rowContainer}>
            <CameraCapture onCapture={handleAddAttachment} style={screenStyles.capture} />
            <Text style={screenStyles.orText}>or</Text>
            <GalleryUpload onUpload={handleAddAttachment} style={screenStyles.upload} />
          </View>
        </ScrollView>
        <SubmitReport />
      </AnimatedBottomSheet>
    </Background>
  );
};

const styles = StyleSheet.create({
  attachment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  clipIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default Report;
