import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const screenStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      elevation: 5,
    },
    bottomform: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      minHeight: height * 0.6,
      maxHeight: height * 0.6,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 20,
    },
    button: {
      padding: 15,
      borderRadius: 10,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      flexDirection: 'row',
      backgroundColor: '#800000',
    },
    buttonLogo: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    buttonText: {
      fontSize: 16,
      color: '#333',
    },
    whiteText: {
      color: '#FFF',
    },
    grayText: {
      color: '#858484',
    },
    emailButtonText: {
      fontSize: 16,
      color: '#9D1111',
    },
    orText: {
      fontSize: 16,
      color: '#333',
      marginVertical: 10,
    },
    googleButton: {
      backgroundColor: '#FFF',
      borderColor: '#858484',
      borderWidth: 1,
    },
    facebookButton: {
      backgroundColor: '#1877F2',
    },
    guestButton: {
      backgroundColor: '#969696',
    },
    emailButton: {
      backgroundColor: '#FFF',
      borderColor: '#9D1111',
      borderWidth: 1,
    },
    
  });

  export default screenStyles;