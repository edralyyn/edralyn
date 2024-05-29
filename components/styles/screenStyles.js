import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 40,
    marginRight: 40,
  },
  logocontainer: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: (height * 0.4 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'regular',
    marginBottom: 5,
  },

  titlecontainer: {
    minHeight: height * 0.8,
    maxHeight: height * 0.8,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    marginLeft: 30,
  },
  titleline1: {
    position: 'absolute',
    top: (height * 0.1 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    color: 'white',
  },
  titleline2: {
    position: 'absolute',
    top: (height * 0.15 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    fontWeight: '800',
    color: 'white',
  },
  capture: {
    marginHorizontal: 10,
    flex: 1,
  },
  upload: {
    marginHorizontal: 10,
    flex: 1,
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
    borderTopRightRadius: 0,
    padding: 10,
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
  loginbutton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: 10,
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
    width: '100%',
    height: 50,
  },
  promptText: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default screenStyles;
