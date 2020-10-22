import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import Header from '../components/Header';

export const REGISTER_SCREEN = 'RegisterScreen';

const RegisterScreen = () => {
    return (
        <>
            <Header showBack={true} showTransparent={true}/>
            <View style={GlobalStyles.centerItem}>
                <Text>Register Screen</Text>
            </View>
        </>
    );
};

export default RegisterScreen;
