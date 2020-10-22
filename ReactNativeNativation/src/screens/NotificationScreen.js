import {View, Text, Button} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {REGISTER_SCREEN} from './RegisterScreen';
import {HOME_DETAILS_SCREEN} from './HomeDetailsScreen';
import {NOTIFICATION_DETAILS_SCREEN} from './NotificationDetailsScreen';
import Header from '../components/Header';

export const NOTIFICATION_SCREEN = 'NotificationScreen';

const NotificationScreen = ({navigation}) => {
    return (
        <>
            <Header title='Notification' />
            <View style={GlobalStyles.centerItem}>
                <Text>Notification Screen</Text>
                <Button title='Go to Notification details Screen' onPress={() => {
                    navigation.navigate(NOTIFICATION_DETAILS_SCREEN);

                }}/>
            </View>
        </>
    );
};

export default NotificationScreen;
