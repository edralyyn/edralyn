// Screen1.js
import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import News from './News';

const { height } = Dimensions.get('window');

const Screen1 = () => {
  const [showNewsScreen, setShowNewsScreen] = useState(false);

  const handleCardPress = () => {
    setShowNewsScreen(true);
  };

  return (
    <Background color="#128200">
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
});

export default Screen1;
