import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';

const { height } = Dimensions.get('window');

const ProfileScreen = () => {
  const [editable, setEditable] = useState(false); // State to track if profile is editable
  const [name, setName] = useState('XICH'); // State for name
  const [location, setLocation] = useState('Manila, Philippines'); // State for location
  const [phone, setPhone] = useState('0912-345-6789'); // State for phone

  const handleEdit = () => {
    setEditable(!editable); // Toggle the editable state
  };

  return (
    <Background color="#2E3192">
      <View style={screenStyles.titlecontainer}>
        <Text style={screenStyles.titleline1}>USER</Text>
        <Text style={screenStyles.titleline2}>PROFILE</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../assets/DP.png')}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>XICH</Text>
        <Text style={styles.DetailsText}>Manila, Philippines</Text>
        <Text style={{...styles.DetailsText, marginBottom: 30,}}>0912-345-6789</Text>

        <TouchableOpacity style={{...styles.Button, backgroundColor: '#D72734',}}>
          <Text style={styles.ButtonText}>TOTAL REPORTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.Button, backgroundColor: '#2A2D90',}}>
          <Text style={styles.ButtonText}>USER BADGES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.Button, backgroundColor: '#EEBA00',}} onPress={handleEdit}>
          <Text style={styles.ButtonText}>Update User Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.Button, backgroundColor: '#808080', marginTop: 25,}}>
        <Image source={require('../assets/logout.png')} style={screenStyles.buttonLogo} />
          <Text style={styles.ButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.75,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 30,
    marginTop: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 5,
    textAlign: 'center',
  },
  DetailsText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginBottom: -2,
    textAlign: 'center',
  },
  Button: {
    backgroundColor: '#FF0000',
    paddingVertical: 16,
    borderRadius: 12,
    width: '55%',
    alignItems: 'center',
    marginBottom: 12,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  },
});

export default ProfileScreen;
