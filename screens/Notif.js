import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native';
import Background from '../components/Bred';
import screenStyles from '../components/styles/screenStyles';
import { MaterialIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const notifications = [
    {
        id: '1',
        title: 'Report Submitted',
        description: 'Your recent fire report has been submitted.',
        isRead: true,
    },
    {
        id: '2',
        title: 'Successfully Created Account',
        description: 'You recently created an account...',
        isRead: true,
    },
    {
        id: '3',
        title: 'Report Submitted',
        description: 'Your recent fire report has been submitted.',
        isRead: false,
    },
    {
        id: '4',
        title: 'Successfully Created Account',
        description: 'You recently created an account...',
        isRead: false,
    },
];

const Notif = () => {
    const [activeButton, setActiveButton] = useState('');

    const filteredNotifications = notifications.filter(notification => 
        activeButton === 'Read' ? notification.isRead : activeButton === 'Unread' ? !notification.isRead : true
    );

    return (
        <Background>
            <View style={screenStyles.titlecontainer}>
                <Text style={screenStyles.titleline2}>NOTIFICATIONS</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Read' && styles.activeButton]}
                            onPress={() => setActiveButton('Read')}
                        >
                            <Text style={[styles.text, activeButton === 'Read' && styles.activeText]}> Read </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, activeButton === 'Unread' && styles.activeButton]}
                            onPress={() => setActiveButton('Unread')}
                        >
                            <Text style={[styles.text, activeButton === 'Unread' && styles.activeText]}>Unread</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textDivider}>Today</Text>
                    <FlatList
                        data={filteredNotifications}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.notificationContainer}>
                                <Image source={require('../assets/notificon.png')} style={styles.notificationIcon} />
                                <View style={styles.notificationTextContainer}>
                                    <Text style={[styles.notificationTitle, item.isRead && styles.readNotificationTitle]}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.notificationDescription}>{item.description}</Text>
                                </View>
                                <TouchableOpacity>
                                    <MaterialIcons name="more-vert" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        )}
                        ListFooterComponent={<Text style={styles.noHistoryText}>No more History</Text>}
                    />
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        margin: 0,
        padding: 0,
        height: height * 0.75,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    innerContainer: {
        flex: 1,
        margin: 20,
        marginTop: 0,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        borderRadius: 8,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#E5E5E5',
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    activeButton: {
        backgroundColor: '#2A2D90',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    activeText: {
        color: 'white',
    },
    textDivider: {
        fontSize: 18,
        color: '#A3A3A3',
        marginBottom: 10,
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    notificationIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    notificationTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    readNotificationTitle: {
        color: '#A3A3A3',
    },
    notificationDescription: {
        fontSize: 14,
        color: '#A3A3A3',
    },
    noHistoryText: {
        textAlign: 'center',
        color: '#A3A3A3',
        marginTop: 20,
    },
});

export default Notif;
