import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import Colors from '../constants/Colors'

const Fab = ({icon,onPress,style}) => {
    return(
        <FAB
            style={{...styles.fab, ...style}}
            icon={icon}
            color={Colors.colorWhite}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: Colors.colorPrimary,
    },
});

export default Fab
