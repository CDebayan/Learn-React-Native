import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import Colors from '../constants/Colors'

const ContainedButton = ({title,onPress}) => {
    return(
        <Button
            style={styles.button}
            mode="contained"
            onPress={onPress}>
            {title}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 16,
        marginStart: 16,
        marginEnd: 16,
        backgroundColor: Colors.colorPrimary
    },
});

export default ContainedButton
