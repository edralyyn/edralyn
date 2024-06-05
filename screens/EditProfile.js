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

  const handleSave = () => {
    // Logic to save the updated profile details
    setEditable(false);
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
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/DP.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Image source={require('../assets/edit.png')} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          editable={editable}
          onChangeText={setName}
        />
        <Text style={styles.text}>Passsword</Text>
        <TextInput
          style={styles.input}
          value={password}
          editable={editable}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        <Text style={styles.text}>Age</Text>
        <TextInput
          style={styles.input}
          value={age}
          editable={editable}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <Text style={styles.text}>Sex</Text>
        <TextInput
          style={styles.input}
          value={sex}
          editable={editable}
          onChangeText={setSex}
        />
        </View>

        <TouchableOpacity style={{ ...styles.Button, backgroundColor: '#EEBA00', }} onPress={editable ? handleSave : handleEdit}>
          <Text style={styles.ButtonText}>{editable ? 'Save Changes' : 'Update User Account'}</Text>
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
    paddingVertical: 50,
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
    justifyContent: 'center',
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
  profileContainer: {
    position: 'relative',
    marginBottom: 30,
    marginTop: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  editButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 2,
  },
  editIcon: {
    width: 40,
    height: 40,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  Button: {
    paddingVertical: 12,
    borderRadius: 12,
    width: '85%',
    alignItems: 'center',
    marginBottom: 12,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  },
  text: {
    fontSize : 16,
    fontWeight: '800',
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '85%'
  }
});

export default EditProfile;
