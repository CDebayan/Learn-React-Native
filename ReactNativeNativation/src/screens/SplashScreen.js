import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyles} from '../styles/GlobalStyles';
import {AUTHENTICATION_STACK} from '../navigation/Routes';
import {LOGIN_SCREEN} from './LoginScreen';


export const SPLASH_SCREEN = 'SplashScreen'

const SplashScreen = ({navigation})=> {
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace(LOGIN_SCREEN)
        }, 1000)
    },[])

    return(
        <View style={GlobalStyles.centerItem}>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default SplashScreen
