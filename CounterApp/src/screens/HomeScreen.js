import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fab from '../components/Fab';
import {GlobalStyles} from '../styles/GlobalStyles';
import Colors from '../constants/Colors';
import AppBar from '../components/AppBar';

const HomeScreen = () => {
    const [count, setCount] = useState(0);
    const addHandler = () => {
        setCount(count + 1);
    };
    const subHandler = () => {
        setCount(count - 1);
    };

    return (
        <View style={GlobalStyles.screen}>
            <AppBar title='Counter App'/>
            <View style={styles.container}>
                <Text style={styles.text}>{count}</Text>
            </View>
            <View style={styles.fabRow}>
                <Fab icon='minus' onPress={subHandler}/>
                <Fab icon='plus' style={styles.fab} onPress={addHandler}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    fabRow: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 16,
        marginEnd: 16,
    },
    fab: {
        marginStart: 16,
        backgroundColor: Colors.colorPrimary,
    },
});

export default HomeScreen;
