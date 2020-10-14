import {ERROR, LOADING, SUCCESS} from '../ActionTypes';
import {POST_CALL_FORM_DATA, POST_CALL_FORM_DATA_LOADING} from '../actions/PostCallFormDataAction';

const initialState = {
    status: LOADING,
    data : null,
    message : ''
};

const PostCallFormDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CALL_FORM_DATA: {
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
        case POST_CALL_FORM_DATA_LOADING: {
            return {status: LOADING};
        }
        default:
            return state;
    }
};

export default PostCallFormDataReducer;
