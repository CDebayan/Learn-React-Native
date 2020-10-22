import {Button, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {HOME_STACK} from '../navigation/Routes';
import {HOME_DETAILS_SCREEN} from './HomeDetailsScreen';
import Header from '../components/Header';

export const PROFILE_DETAILS_SCREEN = 'ProfileDetailsScreen';

const ProfileDetailsScreen = ({navigation}) => {
    return (
        <>
            <Header title='Details' showBack={true}/>
            <View style={GlobalStyles.centerItem}>
                <Text>Profile Details Screen</Text>
                <Button title='Go to Home Details Screen' onPress={() => {
                    navigation.navigate(HOME_STACK, {
                        screen: HOME_DETAILS_SCREEN,
                    });
                }}/>
            </View>
        </>
    );
};

export default ProfileDetailsScreen;
