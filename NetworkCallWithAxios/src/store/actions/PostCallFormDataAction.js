import {postCallFormData} from '../../services/AxiosServices';

export const POST_CALL_FORM_DATA = 'POST_CALL_FORM_DATA';
export const POST_CALL_FORM_DATA_LOADING = 'POST_CALL_FORM_DATA_LOADING';

export const addStudent = () => {
    return async dispatch => {
        dispatch({type: POST_CALL_FORM_DATA_LOADING});
        const response = await postCallFormData(1,"Deba",31);
        dispatch({type: POST_CALL_FORM_DATA, payload: response});
    }
};

