import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {combineReducers, createStore} from 'redux';
import CounterReducer from './src/store/reducers/CounterReducer';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    counterReducer: CounterReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <HomeScreen/>
        </Provider>
    );
}
