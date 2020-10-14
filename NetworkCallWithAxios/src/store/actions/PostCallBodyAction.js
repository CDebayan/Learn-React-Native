import {postCallBody, postCallFormData} from '../../services/AxiosServices';
import {ERROR, RESET, SUCCESS} from '../ActionTypes';
import {POST_CALL_FORM_DATA, POST_CALL_FORM_DATA_LOADING} from './PostCallFormDataAction';

export const POST_CALL_BODY = 'POST_CALL_BODY';
export const POST_CALL_BODY_LOADING = 'POST_CALL_BODY_LOADING';

export const addStudent = () => {
    return async dispatch => {
        dispatch({type: POST_CALL_BODY_LOADING});
        const response = await postCallBody(1,"Debayan",31);
        dispatch({type: POST_CALL_BODY, payload: response});
    }
};
