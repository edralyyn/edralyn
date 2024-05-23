import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const iconsData = [
  { id: 1, name: 'Fire', image: require('../assets/fire.png') },
  { id: 2, name: 'Flood', image: require('../assets/flood.png') },
  { id: 3, name: 'Earthquake', image: require('../assets/earthquake.png') },
  { id: 4, name: 'Eruption', image: require('../assets/eruption.png') },
  { id: 5, name: 'Landslide', image: require('../assets/landslide.png') },
  { id: 6, name: 'Tornado', image: require('../assets/tornado.png') },
];

const ReportIcons = () => {
  return (
    <View style={styles.container}>
      {iconsData.map((icon) => (
        <View key={icon.id} style={styles.iconContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={icon.image} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.text}>{icon.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FAE1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    color: '#636363',
  },
});

export default ReportIcons;
