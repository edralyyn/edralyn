// News.js
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import screenStyles from '../components/styles/screenStyles';
import Background from '../components/Bred';

const { height } = Dimensions.get('window');

const Screen3 = () => {
    return (
            <Background>
            <View style={screenStyles.container}>
                <Text style={styles.container}>
                    Here is some news content.
                </Text>
            </View>
            </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.7,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },    
})

export default Screen3;

