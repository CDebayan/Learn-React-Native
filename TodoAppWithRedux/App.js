import React from 'react';
import Navigator from './src/navigation/Navigator';
import {combineReducers, createStore} from 'redux';
import TodoReducer from './src/store/reducers/TodoReducer';
import {Provider} from 'react-redux';
import AddTodoReducer from './src/store/reducers/AddTodoReducer';

const rootReducer = combineReducers({
    todoReducer: TodoReducer,
    addTodoReducer: AddTodoReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}


