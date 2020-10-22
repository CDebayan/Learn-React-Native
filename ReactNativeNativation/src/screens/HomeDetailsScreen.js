import {Button, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {PROFILE_DETAILS_SCREEN} from './ProfileDetailsScreen';
import Header from '../components/Header';

export const HOME_DETAILS_SCREEN = 'HomeDetailsScreen';

const HomeDetailsScreen = ({navigation}) => {
    return (
        <>
            <Header title='Details' showBack={true}/>
            <View style={GlobalStyles.centerItem}>
                <Text>Home Details Screen</Text>
                <Button title='Go to Profile Details Screen' onPress={() => {
                    navigation.navigate(PROFILE_DETAILS_SCREEN);
                }}/>
            </View>
        </>
    );
};

export default HomeDetailsScreen;
