import {ERROR, LOADING, SUCCESS} from '../ActionTypes';
import {GET_CALL, GET_CALL_LOADING} from '../actions/GetCallAction';

const initialState = {
    status: LOADING,
    data: null,
    message: '',
};

const GetCallReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CALL: {
            if (action.payload != null && action.payload.status != null) {
                if (action.payload.status === 1) {
                    return {status: SUCCESS, data: action.payload.student};
                } else if (action.payload.status === -1) {
                    return {status: ERROR, message: action.payload.message};
                } else {
                    return {status: ERROR, message: 'Something went wrong'};
                }
            } else {
                return {status: ERROR, message: 'Something went wrong'};
            }
        }
        case GET_CALL_LOADING: {
            return {status: LOADING};
        }
        default:
            return state;
    }
};

export default GetCallReducer;
