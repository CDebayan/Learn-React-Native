import {Button, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {HOME_DETAILS_SCREEN} from './HomeDetailsScreen';
import {PROFILE_DETAILS_SCREEN} from './ProfileDetailsScreen';
import Header from '../components/Header';

export const PROFILE_SCREEN = 'ProfileScreen';

const ProfileScreen = ({navigation}) => {
    return (
        <>
            <Header title='Profile' showNotification={true}/>
            <View style={GlobalStyles.centerItem}>
                <Text>Profile Screen</Text>
                <Button title='Go to Profile Details Screen' onPress={() => {
                    navigation.navigate(PROFILE_DETAILS_SCREEN);
                }}/>
            </View>
        </>
    );
};

export default ProfileScreen;
