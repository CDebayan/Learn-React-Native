import React from 'react';
import Navigator from './src/navigation/Navigator';
import {combineReducers, createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import GetListCallReducer from './src/store/reducers/GetCallListReducer';
import ReduxThunk from 'redux-thunk';
import GetCallReducer from './src/store/reducers/GetCallReducer';
import GetCallPathReducer from './src/store/reducers/GetCallPathReducer';
import GetCallQueryReducer from './src/store/reducers/GetCallQueryReducer';
import PostCallFormDataReducer from './src/store/reducers/PostCallFormDataReducer';
import PostCallBodyReducer from './src/store/reducers/PostCallBodyReducer';

const rootReducer = combineReducers({
    getListCallReducer: GetListCallReducer,
    getCallReducer : GetCallReducer,
    getCallPathReducer : GetCallPathReducer,
    getCallQueryReducer : GetCallQueryReducer,
    postCallFormDataReducer : PostCallFormDataReducer,
    postCallBodyReducer : PostCallBodyReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}
