import {
    CLEAR_ADD_TODO_DESCRIPTION_ERROR,
    CLEAR_ADD_TODO_STATE,
    CLEAR_ADD_TODO_TITLE_ERROR,
    VALIDATE_ADD_TODO,
} from '../ActionTypes';


const initialState = {
    status: null,
    titleError: '',
    descriptionError: '',
};

const AddTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALIDATE_ADD_TODO:
            return action.payload;
        case CLEAR_ADD_TODO_TITLE_ERROR:
            return {...state,titleError: ''}
        case CLEAR_ADD_TODO_DESCRIPTION_ERROR:
            return {...state,descriptionError: ''};
        case CLEAR_ADD_TODO_STATE:
            return {initialState};
        default:
            return state;
    }
};

export default AddTodoReducer;
