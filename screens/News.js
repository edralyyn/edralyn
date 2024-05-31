// News.js
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

const News = () => {
    return (

        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image source={require('../assets/cover1.png')}/>
                <Text style={styles.text}>
                    Here is some news content.
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    image: {
        padding: -20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginTop: 10,
    },
});

export default News;

