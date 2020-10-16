import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddTodoScreen, {ADD_TODO_SCREEN} from '../screens/AddTodoScreen';
import HomeScreen, {HOME_SCREEN} from '../screens/HomeScreen';

const Stack = createStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
                <Stack.Screen name={ADD_TODO_SCREEN} component={AddTodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator
