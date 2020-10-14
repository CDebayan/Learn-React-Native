import {ERROR, LOADING, SUCCESS} from '../ActionTypes';
import {POST_CALL_BODY, POST_CALL_BODY_LOADING} from '../actions/PostCallBodyAction';

const initialState = {
    status: LOADING,
    data : null,
    message : ''
};

const PostCallBodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CALL_BODY: {
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
        case POST_CALL_BODY_LOADING: {
            return {status: LOADING};
        }
        default:
            return state;
    }
};

export default PostCallBodyReducer;
