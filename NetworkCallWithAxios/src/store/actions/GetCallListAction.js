import {getCallList} from '../../services/AxiosServices';

export const GET_CALL_LIST = 'GET_CALL_LIST';
export const GET_CALL_LIST_LOADING = 'GET_CALL_LIST_LOADING';

export const getStudentList = () => {
    return async dispatch => {
        dispatch({type: GET_CALL_LIST_LOADING});
        const response = await getCallList();
        dispatch({type: GET_CALL_LIST, payload: response});
    }
};

