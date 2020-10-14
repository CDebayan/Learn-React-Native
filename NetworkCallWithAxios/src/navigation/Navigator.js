import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen, {HOME_SCREEN} from '../screens/HomeScreen';
import GetCallListScreen, {GET_CALL_LIST_SCREEN} from '../screens/GetCallListScreen';
import GetCallScreen, {GET_CALL_SCREEN} from '../screens/GetCallScreen';
import GetCallPathScreen, {GET_CALL_PATH_SCREEN} from '../screens/GetCallPathScreen';
import GetCallQueryScreen, {GET_CALL_QUERY_SCREEN} from '../screens/GetCallQueryScreen';
import PostCallFormDataScreen, {POST_CALL_FORM_DATA_SCREEN} from '../screens/PostCallFormDataScreen';
import PostCallBodyScreen, {POST_CALL_BODY_SCREEN} from '../screens/PostCallBodyScreen';
import SingleImageUploadScreen, {SINGLE_IMAGE_UPLOAD_SCREEN} from '../screens/SingleImageUploadScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={HOME_SCREEN} component={HomeScreen}/>
                <Stack.Screen name={GET_CALL_LIST_SCREEN} component={GetCallListScreen}/>
                <Stack.Screen name={GET_CALL_SCREEN} component={GetCallScreen}/>
                <Stack.Screen name={GET_CALL_PATH_SCREEN} component={GetCallPathScreen}/>
                <Stack.Screen name={GET_CALL_QUERY_SCREEN} component={GetCallQueryScreen}/>
                <Stack.Screen name={POST_CALL_FORM_DATA_SCREEN} component={PostCallFormDataScreen}/>
                <Stack.Screen name={POST_CALL_BODY_SCREEN} component={PostCallBodyScreen}/>
                <Stack.Screen name={SINGLE_IMAGE_UPLOAD_SCREEN} component={SingleImageUploadScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
