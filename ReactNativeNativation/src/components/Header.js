import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/Colors';
import {DRAWER_STACK, HOME_STACK} from '../navigation/Routes';
import {HOME_DETAILS_SCREEN} from '../screens/HomeDetailsScreen';
import {NOTIFICATION_SCREEN} from '../screens/NotificationScreen';

const Header = ({title = '', showBack = false, showNotification = false, showTransparent = false}) => {
    const navigation = useNavigation();

    const _goBack = () => navigation.goBack();
    const _handleNotification = () => navigation.navigate(DRAWER_STACK,{
        screen: NOTIFICATION_SCREEN
    });

    {
        if (showTransparent) {
            return (
                <Appbar.Header style={styles.appbarTransparent}>
                    {
                        showBack ?
                            <Appbar.BackAction onPress={_goBack} color={Colors.colorBlack}/>
                            :
                            null
                    }
                    <Appbar.Content title={title} color={Colors.colorBlack}/>
                    {showNotification ? <Appbar.Action icon="bell" color={Colors.colorBlack} onPress={_handleNotification}/> : null}
                </Appbar.Header>
            );
        } else {
            return (
                <Appbar.Header style={styles.appbar}>
                    {
                        showBack ?
                            <Appbar.BackAction onPress={_goBack} color={Colors.colorWhite}/>
                            :
                            <TouchableOpacity onPress={()=>{
                                navigation.openDrawer();
                            }}>
                                <Avatar.Icon size={40} icon="menu" color={Colors.colorWhite} style={styles.menu}/>
                            </TouchableOpacity>
                    }
                    <Appbar.Content title={title} color={Colors.colorWhite}/>
                    {showNotification ? <Appbar.Action icon="bell" color={Colors.colorWhite} onPress={_handleNotification}/> : null}
                </Appbar.Header>
            );
        }
    }

};

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: Colors.colorPrimary,
    },
    appbarTransparent: {
        backgroundColor: Colors.colorTransparent,
        elevation: 0,
    },
    menu: {
        backgroundColor: Colors.colorTransparent,
        marginStart: 8
    }
});

export default Header;
