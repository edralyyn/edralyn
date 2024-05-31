// News.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Background from '../components/Bred';

const News = () => {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Here is some news content.
                </Text>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});

export default News;
