import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CommonActions} from '@react-navigation/native';
import LoginScreen, {LOGIN_SCREEN} from '../screens/LoginScreen';
import RegisterScreen, {REGISTER_SCREEN} from '../screens/RegisterScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen, {HOME_SCREEN} from '../screens/HomeScreen';
import ProfileScreen, {PROFILE_SCREEN} from '../screens/ProfileScreen';
import HomeDetailsScreen, {HOME_DETAILS_SCREEN} from '../screens/HomeDetailsScreen';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import SplashScreen, {SPLASH_SCREEN} from '../screens/SplashScreen';
import ProfileDetailsScreen, {PROFILE_DETAILS_SCREEN} from '../screens/ProfileDetailsScreen';
import NotificationScreen, {NOTIFICATION_SCREEN} from '../screens/NotificationScreen';
import NotificationDetailsScreen, {NOTIFICATION_DETAILS_SCREEN} from '../screens/NotificationDetailsScreen';
import {resetStack} from './Navigator';
import Colors from '../constants/Colors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const RootStack = () => (
    <Stack.Navigator initialRouteName={SPLASH_SCREEN} headerMode='none'>
        <Stack.Screen
            name={SPLASH_SCREEN}
            component={SplashScreen}
        />
        <Stack.Screen
            name={LOGIN_SCREEN}
            component={LoginScreen}
            options={{title: ''}}
        />
        <Stack.Screen
            name={REGISTER_SCREEN}
            component={RegisterScreen}
            options={{headerTransparent: true,title:''}}
        />
        <Stack.Screen
            name={DRAWER_STACK}
            component={DrawerStack}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name={PROFILE_DETAILS_SCREEN}
            component={ProfileDetailsScreen}
            options={{title: 'Details'}}
        />
        <Stack.Screen
            name={NOTIFICATION_DETAILS_SCREEN}
            component={NotificationDetailsScreen}
            options={{title: 'Details'}}
        />
    </Stack.Navigator>
)

export const BOTTOM_TAB_STACK = 'BottomTabStack'
export const BottomTabStack = () => (
    <Tab.Navigator>
        <Tab.Screen name={HOME_STACK} component={HomeStack} options={{title: 'Home'}}/>
        <Tab.Screen name={PROFILE_SCREEN} component={ProfileScreen} options={{title: 'Profile'}}/>
    </Tab.Navigator>
)



const SideBar = ({...props}) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Profile" onPress={() => {
                props.navigation.navigate(BOTTOM_TAB_STACK,{
                    screen: PROFILE_SCREEN
                });
            }}/>
            <DrawerItem label="Logout" onPress={() => {
                resetStack(props.navigation,LOGIN_SCREEN);
            }}/>
        </DrawerContentScrollView>
    );
}

export const DRAWER_STACK = 'DrawerStack'
export const DrawerStack = () => (
    <Drawer.Navigator initialRouteName={BOTTOM_TAB_STACK} drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen name={BOTTOM_TAB_STACK} component={BottomTabStack} options={{title: 'Home'}}/>
        <Drawer.Screen name={NOTIFICATION_SCREEN} component={NotificationScreen} options={{title: 'Notification'}}/>
    </Drawer.Navigator>
)

export const HOME_STACK = 'HomeStack';
export const HomeStack = () => (
    <Stack.Navigator initialRouteName={HOME_SCREEN} headerMode='none'>
        <Stack.Screen
            name={HOME_SCREEN}
            component={HomeScreen}
            options={{title: ''}}
        />
        <Stack.Screen
            name={HOME_DETAILS_SCREEN}
            component={HomeDetailsScreen}
            options={{title:'Details'}}
        />
    </Stack.Navigator>
);


