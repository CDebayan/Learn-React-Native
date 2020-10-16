import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import Colors from '../constants/Colors';

const OutlinedTextInput = ({label, value, onChangeText, errorText = ''}) => {
    return (
        <View style={styles.textInputContainer}>
            <TextInput
                mode="outlined"
                theme={{colors: {primary: Colors.colorPrimary, underlineColor: Colors.colorTransparent}}}
                selectionColor={Colors.colorPrimary}
                error={errorText !== ''}
                label={label}
                value={value}
                onChangeText={onChangeText}
            />
            {
                errorText !== '' ? <Text style={styles.errorText}>{errorText}</Text> : null
            }

        </View>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        marginTop: 16,
        marginStart: 16,
        marginEnd: 16,
    },
    errorText: {
        marginStart: 8,
        color: Colors.colorError
    }
});

export default OutlinedTextInput;
