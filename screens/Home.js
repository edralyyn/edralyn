import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import ReportIcons from '../components/ReportIcons';

const { width, height } = Dimensions.get('window');

const websites = [
  { id: 1, name: 'Website 1', url: 'https://www.dswd.gov.ph/', previewImage: require('../assets/dswd.png') },
  { id: 2, name: 'Website 2', url: 'https://www.gov.ph/the-govph/', previewImage: require('../assets/gov.png') },
  { id: 3, name: 'Website 3', url: 'https://car.dswd.gov.ph/programs-services/', previewImage: require('../assets/progs.png') },
  // Add more websites as needed
];

const WebsiteListItem = ({ item }) => (
  <TouchableOpacity style={styles.websiteCard} onPress={() => openWebsite(item.url)}>
    <ImageBackground source={item.previewImage} style={styles.websitePreview} resizeMode="cover">
      <Text style={styles.websiteName}>{item.name}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const openWebsite = (url) => {
  // Open the website in a web browser or handle navigation as needed
  console.log('Opening website:', url);
};

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
            <Text style={{ ...styles.text, fontSize: 24 }}>Hi, Xich</Text>
            <Text style={styles.text}>+63901***2345</Text>
          </View>
        </View>
        <ReportIcons />
        <View style={styles.imageContainer}>
          <Image source={require('../assets/QRT AKO!.png')} style={styles.qrImage} resizeMode="contain" />
        </View>
        <View style={styles.websiteListContainer}>
          <Text style={styles.sectionTitle}>Suggested Websites</Text>
          <FlatList
            data={websites}
            renderItem={({ item }) => <WebsiteListItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: -50,
  },
  image: {
    height: height * 0.2,
    width: '45%',
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
  websiteListContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  websiteCard: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  websitePreview: {
    width: 150,
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  websiteName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  imageContainer: {
  alignItems: 'center', // Center the image horizontally
},
qrImage: {
  width: '100%', // Adjust the width as needed
  height: 200, // Adjust the height as needed
  marginBottom: 20, // Add margin as needed
  marginTop: -50,
},
});

export default HomeScreen;
