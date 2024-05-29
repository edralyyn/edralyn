import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import ReportIcons from '../components/ReportIcons';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigateToScreen }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/resolve.png')} style={styles.image} resizeMode="contain" />
        <Image source={require('../assets/logos.png')} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Profile')}>
          <ImageBackground
            source={require('../assets/DP.png')}
            style={styles.imageBackground}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={{...styles.text, fontSize: 24}}>Hi, Xich</Text>
          <Text style={styles.text}>+63901***2345</Text>
        </View>
      </View>
      <ReportIcons />
      <View style={styles.container}>
      <Image source={require('../assets/QRT AKO!.png')}/>
      </View>
      <Text>Suggested Websites</Text>
      <FlatList></FlatList>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50, // Apply marginTop only to the outermost container
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -30, // Adjust as needed
  },
  image: {
    height: height * 0.2,
    width: '45%', // Adjust width to ensure the images don't overflow
    marginBottom: 0,
  },
  button: {
    alignSelf: 'center',
  },
  imageBackground: {
    backgroundColor: '#2A2D90',
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});


export default HomeScreen;
