import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../styles/GlobalStyles';
import {ActivityIndicator, Card, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {getStudentList} from '../store/actions/GetCallListAction';
import {ERROR, LOADING, SUCCESS} from '../store/ActionTypes';
import Colors from '../constants/Colors';

export const GET_CALL_LIST_SCREEN = 'GetCallListScreen';

const GetCallListScreen = () => {

    const state = useSelector(state => state.getListCallReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudentList());
    }, []);

    const renderTodoItem = ({item}) => (
        <Card style={styles.card}>
            <Card.Title
                title={item.name}
                subtitle={'Age : ' + item.age}/>
        </Card>
    );

    const setFlatList = () => {
        if (state.data != null && state.data.length > 0) {
            return <FlatList
                style={styles.list}
                keyExtractor={(item) => item.id.toString()}
                data={state.data}
                renderItem={renderTodoItem}/>;
        } else {
            return <View style={GlobalStyles.centerContainer}>
                <Text>No Data</Text>
            </View>;
        }

    };

    const setView = () => {
        switch (state.status) {
            case LOADING:
                return <View style={GlobalStyles.centerContainer}>
                    <ActivityIndicator animating={true} color={Colors.colorPrimary}/>
                </View>;
            case SUCCESS:
                return setFlatList();
            case ERROR:
                return <View style={GlobalStyles.centerContainer}>
                    <Text>{state.message}</Text>
                </View>;
        }

    };

    return (
        <View style={{...GlobalStyles.screen, ...styles.screen}}>
            {
                setView()
            }
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingVertical: 16,
    },
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 5,
    },
});

export default GetCallListScreen;
