import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ADD_TODO_SCREEN} from './AddTodoScreen';
import {GlobalStyles} from '../styles/GlobalStyles';
import Fab from '../components/Fab';
import {Card} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo} from '../store/actions/TodoActions';

export const HOME_SCREEN = 'HomeScreen';

const HomeScreen = ({navigation}) => {
    const state = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();

    const fabHandler = () => {
        navigation.navigate(ADD_TODO_SCREEN);
    };

    const cardHandler = () => {
        dispatch();
    };

    const renderTodoItem = ({item}) => (
        <Card style={styles.card} onLongPress={() => {
            dispatch(deleteTodo(item.id));
        }}>
            <Card.Title
                title={item.title}
                subtitle={item.description}/>
        </Card>
    );

    return (
        <View style={GlobalStyles.screen}>
            <FlatList
                style={styles.list}
                keyExtractor={(item, index) => item.id}
                data={state.todoList}
                renderItem={renderTodoItem}/>

            <View style={styles.fabContainer}>
                <Fab icon='plus' onPress={fabHandler}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 16,
        marginEnd: 16,
    },
    list: {
        paddingVertical: 16,

    },
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 5,
    },
});

export default HomeScreen;
