import {getCallPathParam} from '../../services/AxiosServices';

export const GET_CALL_PATH = 'GET_CALL_PATH';
export const GET_CALL_PATH_LOADING = 'GET_CALL_PATH_LOADING';

export const getStudent = () => {
    return async dispatch => {
        dispatch({type: GET_CALL_PATH_LOADING});
        const response = await getCallPathParam(1,"Deb",34);
        dispatch({type: GET_CALL_PATH, payload: response});
    }
};

