import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const iconsData = [
  { id: 1, name: 'Fire', image: require('../assets/fire.png') },
  { id: 2, name: 'Flood', image: require('../assets/flood.png') },
  { id: 3, name: 'Earthquake', image: require('../assets/earthquake.png') },
  { id: 4, name: 'Eruption', image: require('../assets/eruption.png') },
  { id: 5, name: 'Others', image: require('../assets/others.png') },
];

// Calculate button size based on screen width
const { width } = Dimensions.get('window');
const padding = 20;
const margin = 20;
const columns = 4;
const buttonSize = (width - padding * 2 - margin * (columns * 2)) / columns;

const ReportIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconPress = (id) => {
    setSelectedIcon(id);
  };

  return (
    <View style={styles.container}>
      {iconsData.map((icon) => (
        <View key={icon.id} style={styles.iconContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              { width: buttonSize, height: buttonSize },
              selectedIcon === icon.id && styles.selectedButton,
            ]}
            onPress={() => handleIconPress(icon.id)}
          >
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
    justifyContent: 'flex-start', // Align icons to the left side
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    margin: margin / 2, // Adjust margin between icons
  },
  button: {
    backgroundColor: '#FAE1E1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: buttonSize / 2,
  },
  selectedButton: {
    shadowColor: '#CC4A4A',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 3,
    borderColor: '#CC4A4A',
  },
  icon: {
    width: buttonSize / 2,
    height: buttonSize / 2,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: '#636363',
    textAlign: 'center',
  },
});

export default ReportIcons;
