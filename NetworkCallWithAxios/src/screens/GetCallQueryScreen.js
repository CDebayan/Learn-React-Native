import {ActivityIndicator, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ERROR, LOADING, SUCCESS} from '../store/ActionTypes';
import {GlobalStyles} from '../styles/GlobalStyles';
import Colors from '../constants/Colors';
import {getStudent} from '../store/actions/GetCallQueryAction';

export const GET_CALL_QUERY_SCREEN = 'GetCallQueryScreen';

const GetCallQueryScreen = () => {
    const state = useSelector(state => state.getCallQueryReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudent());
    }, []);

    const setView = () => {
        switch (state.status) {
            case LOADING:
                return <View style={GlobalStyles.centerContainer}>
                    <ActivityIndicator animating={true} color={Colors.colorPrimary}/>
                </View>;
            case SUCCESS:
                return <View style={GlobalStyles.centerContainer}>
                    <Text>{JSON.stringify(state.data)}</Text>
                </View>;
            case ERROR:
                return <View style={GlobalStyles.centerContainer}>
                    <Text>{state.message}</Text>
                </View>;
        }

    };

    return (
        <View style={{...GlobalStyles.centerContainer}}>
            {
                setView()
            }
        </View>
    );
};

const styles = StyleSheet.create({

});

export default GetCallQueryScreen
