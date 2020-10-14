import {getCallQueryParam} from '../../services/AxiosServices';

export const GET_CALL_QUERY = 'GET_CALL';
export const GET_CALL_QUERY_LOADING = 'GET_CALL_LOADING';

export const getStudent = () => {
    return async dispatch => {
        dispatch({type: GET_CALL_QUERY_LOADING});
        const response = await getCallQueryParam(1,"Debu",34);
        dispatch({type: GET_CALL_QUERY, payload: response});
    }
};
