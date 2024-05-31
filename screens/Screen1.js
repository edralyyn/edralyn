import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import axios from 'axios';
import cheerio from 'cheerio-without-node-native';

const { height } = Dimensions.get('window');

const Screen1 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://kmportal.dswd.gov.ph/news');
        const html = response.data;
        const $ = cheerio.load(html);
        const newsItems = [];

        $('.news-item').each((index, element) => {
          const title = $(element).find('.news-title').text().trim();
          const description = $(element).find('.news-description').text().trim();
          const link = $(element).find('a').attr('href');
          newsItems.push({ title, description, link });
        });

        setNews(newsItems);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Background color="#128200">
      <View style={screenStyles.titlecontainer}>
        <Text style={screenStyles.titleline1}>DSWD NCR</Text>
        <Text style={screenStyles.titleline2}>ANNOUNCEMENT</Text>
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {news.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.description}</Text>
            </View>
          ))}
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
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Screen1;
