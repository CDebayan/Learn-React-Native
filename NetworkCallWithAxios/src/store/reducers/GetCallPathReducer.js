import {ERROR, LOADING, SUCCESS} from '../ActionTypes';
import {GET_CALL_PATH, GET_CALL_PATH_LOADING} from '../actions/GetCallPathAction';

const initialState = {
    status: LOADING,
    data : null,
    message : ''
};

const GetCallPathReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CALL_PATH: {
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
        case GET_CALL_PATH_LOADING: {
            return {status: LOADING};
        }
        default:
            return state;
    }
};

export default GetCallPathReducer;
