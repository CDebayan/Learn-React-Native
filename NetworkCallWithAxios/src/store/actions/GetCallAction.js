import {getCall} from '../../services/AxiosServices';

export const GET_CALL = 'GET_CALL';
export const GET_CALL_LOADING = 'GET_CALL_LOADING';

export const getStudent = () => {
    return async dispatch => {
        dispatch({type: GET_CALL_LOADING});
        const response = await getCall();
        dispatch({type: GET_CALL, payload: response});
    }
};

