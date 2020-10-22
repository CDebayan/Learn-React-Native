import React from 'react';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {RootStack} from './Routes';


export const resetStack = (navigation,screen) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{name: screen}],
        }),
    );
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    );
};

export default Navigator;
