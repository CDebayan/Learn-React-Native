import {DECREMENT, INCREMENT} from '../actions/CounterAction';

const initialState = {
    countValue: 0,
};

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {countValue: state.countValue + action.payload};
        case DECREMENT:
            return {countValue: state.countValue + action.payload};
        default:
            return state;
    }
};

export default CounterReducer;
