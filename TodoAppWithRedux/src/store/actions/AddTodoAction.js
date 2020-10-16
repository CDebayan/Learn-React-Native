import {
    ADD_TODO,
    CLEAR_ADD_TODO_DESCRIPTION_ERROR,
    CLEAR_ADD_TODO_STATE,
    CLEAR_ADD_TODO_TITLE_ERROR,
    SUCCESS,
    VALIDATE_ADD_TODO,
    VALIDATION_ERROR,
} from '../ActionTypes';

export const validateAddTodo = (title, description) => {
    let validationError = false;
    let titleError = ''
    let descriptionError = ''

    if (title === '') {
        validationError = true;
        titleError = 'Title is empty'
    }
    if (description === '') {
        validationError = true;
        descriptionError = 'Description is empty'
    }

    if (validationError) {
        return {
            type: VALIDATE_ADD_TODO,
            payload: {
                status: VALIDATION_ERROR,
                titleError: titleError,
                descriptionError: descriptionError,
            },
        };
    } else {
        return {
            type: VALIDATE_ADD_TODO,
            payload: {
                status: SUCCESS
            },
        };
    }
};

export const clearDescriptionError = () => {
    return {type : CLEAR_ADD_TODO_DESCRIPTION_ERROR}
}

export const clearTitleError = () => {
    return {type : CLEAR_ADD_TODO_TITLE_ERROR}
}

export const clearState = () => {
    return {type : CLEAR_ADD_TODO_STATE}
}
