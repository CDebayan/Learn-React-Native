import {Button, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {HOME_DETAILS_SCREEN} from './HomeDetailsScreen';
import Header from '../components/Header';

export const HOME_SCREEN = 'HomeScreen';

const HomeScreen = ({navigation}) => {
    return (
        <>
            <Header title='Home' showNotification={true}/>
            <View style={GlobalStyles.centerItem}>
            <Text>Home Screen</Text>
            <Button title='Go to Home Details Screen' onPress={() => {
                navigation.navigate(HOME_DETAILS_SCREEN);
            }}/>
        </View>
        </>
    );
};

export default HomeScreen;
