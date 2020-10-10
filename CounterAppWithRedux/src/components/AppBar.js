import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import Colors from '../constants/Colors';

const AppBar = ({title}) => {
    return (
        <Appbar.Header style={styles.appbar}>
            <Appbar.Content title={title}/>
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: Colors.colorPrimary,
    },
});

export default AppBar;
