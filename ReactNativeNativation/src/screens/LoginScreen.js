import {Button, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {REGISTER_SCREEN} from './RegisterScreen';
import {DRAWER_STACK} from '../navigation/Routes';
import {resetStack} from '../navigation/Navigator';

export const LOGIN_SCREEN = 'LoginScreen';

const LoginScreen = ({navigation}) => {
    return (
        <View style={GlobalStyles.centerItem}>
            <Text>Login Screen</Text>
            <View style={GlobalStyles.button}>
                <Button title='Go to Register Screen' onPress={() => {
                    navigation.navigate(REGISTER_SCREEN);
                }}/>
            </View>
            <View style={GlobalStyles.button}>
                <Button title='Go to Home Screen' onPress={() => {
                    resetStack(navigation,DRAWER_STACK);
                }}/>
            </View>
        </View>
    );
};

export default LoginScreen;
