import {ADD_TODO, DELETE_TODO} from '../ActionTypes';

export const addTodo = (title,description) => {
    return {type : ADD_TODO,payload: {title : title,description : description}}
}

export const deleteTodo = (id) => {
    return {type : DELETE_TODO,payload: {id : id}}
}
