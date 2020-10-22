import {Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import Header from '../components/Header';

export const NOTIFICATION_DETAILS_SCREEN = 'NotificationDetailsScreen';

const NotificationDetailsScreen = ({navigation}) => {
    return (
        <>
            <Header title='Details' showBack={true}/>
            <View style={GlobalStyles.centerItem}>
                <Text>Notification Details Screen</Text>
            </View>
        </>
    );
};

export default NotificationDetailsScreen;
