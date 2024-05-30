import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import ReportIcons from '../components/ReportIcons';

const { width, height } = Dimensions.get('window');

const websites = [
  { id: 1, name: 'DSWD Website', description: 'https://www.dswd.gov.ph/', url: 'https://www.dswd.gov.ph/', previewImage: require('../assets/dswd.png') },
  { id: 2, name: 'Government Official Website', description: 'https://www.gov.ph/the-govph/', url: 'https://www.gov.ph/the-govph/', previewImage: require('../assets/gov.png') },
  { id: 3, name: 'DSWD Programs', description: 'https://car.dswd.gov.ph/programs-services/', url: 'https://car.dswd.gov.ph/programs-services/', previewImage: require('../assets/progs.png') },
  // Add more websites as needed
];

const WebsiteListItem = ({ item }) => (
  <TouchableOpacity style={styles.websiteCard} onPress={() => openWebsite(item.url)}>
    <ImageBackground source={item.previewImage} style={styles.websitePreview} resizeMode="cover" />
    <View style={styles.websiteInfo}>
      <Text style={styles.websiteName}>{item.name}</Text>
      <Text style={styles.websiteDescription}>{item.description}</Text>
    </View>
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
            <Text style={{ ...styles.text, fontSize: 24 }}>Hi, XICH</Text>
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
    width: 300, // Set the card width to 250
    backgroundColor: '#fff',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1, // Light border
    borderColor: '#ccc', // Light border color
  },
  websitePreview: {
    width: '100%',
    aspectRatio: 16 / 9, // Maintain aspect ratio of the image
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  websiteInfo: {
    paddingStart: 20,
    padding: 5,
    backgroundColor: '#fff',
  },
  websiteName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  websiteDescription: {
    color: '#858484',
    fontSize: 14,
  },
  imageContainer: {
    alignItems: 'center',
  },
  qrImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    marginTop: -50,
  },
});

export default HomeScreen;
