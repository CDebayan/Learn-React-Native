import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../styles/GlobalStyles';
import OutlinedTextInput from '../components/OutlinedTextInput';
import ContainedButton from '../components/ContainedButton';
import {clearDescriptionError, clearState, clearTitleError, validateAddTodo} from '../store/actions/AddTodoAction';
import {useDispatch, useSelector} from 'react-redux';
import {SUCCESS} from '../store/ActionTypes';
import {addTodo} from '../store/actions/TodoActions';

export const ADD_TODO_SCREEN = 'AddTodoScreen';

const AddTodoScreen = ({navigation}) => {
    const state = useSelector(state => state.addTodoReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        // ComponentDidMount // called when screen is visible
        dispatch(clearState());

        // ComponentWillUnmount()  // called when screen popped from stack
        return function cleanup() {
            dispatch(clearState());
        }
    },[])

    useEffect(()=>{ // componentDidUpdate() // called only when status is changed
        if(state.status === SUCCESS){
            dispatch(addTodo(title,description))
            navigation.pop()
        }
    },[state.status])

    const addHandler = () => {
        dispatch(validateAddTodo(title, description));
    };
    return (
        <View style={GlobalStyles.screen}>
            <View style={styles.formContainer}>
                <OutlinedTextInput
                    label="Title"
                    value={title}
                    errorText={state.titleError}
                    onChangeText={value => {
                        if (state.titleError !== '') {
                            dispatch(clearTitleError(state));
                        }
                        setTitle(value);
                    }}
                />

                <OutlinedTextInput
                    label="Description"
                    value={description}
                    errorText={state.descriptionError}
                    onChangeText={value => {
                        if (state.descriptionError !== '') {
                            dispatch(clearDescriptionError(state));
                        }
                        setDescription(value);
                    }}
                />
            </View>
            <ContainedButton title='Add' onPress={addHandler}/>
        </View>

    );
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
    },
});

export default AddTodoScreen;
