import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';

const { height } = Dimensions.get('window');

const News = ({ navigateToScreen }) => {
  const [showNews, setShowNews] = useState(false);

  const handleCardPress = () => {
    setShowNews(true);
  };

  return (
    <Background color="#128200">
      {showNews ? (
        <ScrollView contentContainerStyle={styles.newsScrollContainer}>
          <View style={styles.newsContainer}>
            <Image source={require('../assets/cover1.png')} style={styles.newsImage} />
            <Text style={styles.newsText}>
              Here is some news content.
            </Text>
          </View>
        </ScrollView>
      ) : (
        <>
    <View style={screenStyles.titlecontainer}>
      <Text style={screenStyles.titleline1}>DSWD NCR</Text>
      <Text style={screenStyles.titleline2}>ANNOUNCEMENT</Text>
    </View>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <TouchableOpacity style={styles.card} onPress={handleCardPress}>
          <Image source={require('../assets/news1.png')} style={styles.cardImage} />
          <View style={styles.textcontainer}>
            <Text style={styles.cardTitle}>WORLD SOCIAL WORK DAY</Text>
            <Text style={styles.cardText}>Today, we celebrate the value and importance of social work around the world. In the most trying times, social workers step up; they do not choose the time or day to act, or whether their lives will be in danger or...</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardPress}>
          <Image source={require('../assets/news2.png')} style={styles.cardImage} />
          <View style={styles.textcontainer}>
            <Text style={styles.cardTitle}>RELIEF MISSION</Text>
            <Text style={styles.cardText}>Nagkaroon ng medical mission ang Rehabilitation Sheltered Workshop (RSW) at National Vocational Center (NVRC) sa pakikipag-ugnayan ng Armed Forces of the Philippines Health Service Command kasama...</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardPress}>
          <Image source={require('../assets/news3.png')} style={styles.cardImage} />
          <View style={styles.textcontainer}>
            <Text style={styles.cardTitle}>DSWD NCR NAMAHAGI NG TULONG</Text>
            <Text style={styles.cardText}>TINGNAN: Mula sa request para sa resource augmentation ng Pamahalaan ng Muntinlupa, ang DSWD NCR - Disaster Response Management Division av agarana namahagi na 963.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardPress}>
          <Image source={require('../assets/news1.png')} style={styles.cardImage} />
          <View style={styles.textcontainer}>
            <Text style={styles.cardTitle}>WORLD SOCIAL WORK DAY</Text>
            <Text style={styles.cardText}>Today, we celebrate the value and importance of social work around the world. In the most trying times, social workers step up; they do not choose the time or day to act, or whether their lives will be in danger or...</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardPress}>
          <Image source={require('../assets/news2.png')} style={styles.cardImage} />
          <View style={styles.textcontainer}>
            <Text style={styles.cardTitle}>RELIEF MISSION</Text>
            <Text style={styles.cardText}>Nagkaroon ng medical mission ang Rehabilitation Sheltered Workshop (RSW) at National Vocational Center (NVRC) sa pakikipag-ugnayan ng Armed Forces of the Philippines Health Service Command kasama...</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCardPress}>
          <Image source={require('../assets/news3.png')} style={styles.cardImage} />
          <View style={styles.textcontainer}>
            <Text style={styles.cardTitle}>DSWD NCR NAMAHAGI NG TULONG</Text>
            <Text style={styles.cardText}>TINGNAN: Mula sa request para sa resource augmentation ng Pamahalaan ng Muntinlupa, ang DSWD NCR - Disaster Response Management Division av agarana namahagi na 963.</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
        </>
      )}
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.7,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FAFAFA',
    marginVertical: 10,
    width: '90%',
    borderColor: '#858484',
    borderWidth: 0.2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  textcontainer: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
    alignSelf: 'flex-start'
  },
  cardText: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start'
  },
  newsScrollContainer: {
    flex: 1,
  },
  newsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
  },
});

export default News;
