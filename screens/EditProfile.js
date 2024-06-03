import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';

const { height } = Dimensions.get('window');

const EditProfile = () => {
  const [editable, setEditable] = useState(false); // State to track if profile is editable
  const [name, setName] = useState('Xich'); // State for name
  const [password, setPassword] = useState(''); // State for password
  const [age, setAge] = useState('24'); // State for age
  const [sex, setSex] = useState('Male'); // State for sex
  const [location, setLocation] = useState('Manila, Philippines'); // State for location
  const [phone, setPhone] = useState('0912-345-6789'); // State for phone

  const handleEdit = () => {
    setEditable(!editable); // Toggle the editable state
  };

  return (
    <Background color="#2E3192">
      <View style={styles.titleContainer}>
        <Image
          source={require('../assets/backbutton.png')}
          style={styles.backButton}
        />
        <Text style={styles.titleText}>Edit Profile</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../assets/DP.png')}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>XICH</Text>
        <Text style={styles.DetailsText}>Manila, Philippines</Text>
        <Text style={{...styles.DetailsText, marginBottom: 30,}}>0912-345-6789</Text>

        <TouchableOpacity style={{...styles.Button, backgroundColor: '#EEBA00',}} onPress={handleEdit}>
          <Text style={styles.ButtonText}>Update User Account</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
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

export default EditProfile;