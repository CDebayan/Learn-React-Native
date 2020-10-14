import {ERROR, LOADING, SUCCESS} from '../ActionTypes';
import {GET_CALL_LIST, GET_CALL_LIST_LOADING} from '../actions/GetCallListAction';

const initialState = {
    status: LOADING,
    data : [],
    message : ''
};

const GetListCallReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CALL_LIST: {
            if (action.payload != null && action.payload.status != null) {
                if (action.payload.status === 1) {
                    return {status: SUCCESS, data: action.payload.studentList};
                } else if (action.payload.status === -1) {
                    return {status: ERROR, message: action.payload.message};
                } else {
                    return {status: ERROR, message: 'Something went wrong'};
                }
            } else {
                return {status: ERROR, message: 'Something went wrong'};
            }
        }
        case GET_CALL_LIST_LOADING: {
            return {status: LOADING};
        }
        default:
            return state;
    }
};

export default GetListCallReducer;
