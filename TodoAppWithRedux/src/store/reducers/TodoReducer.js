import {ADD_TODO, DELETE_TODO} from '../ActionTypes';
import TodoModel from '../../models/TodoModel';

let id = 0;

const initialState = {
    todoList: [],
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            id++;
            const todo = new TodoModel(
                id.toString(),
                action.payload.title,
                action.payload.description
            );
            return {todoList: [...state.todoList,todo]};
        }
        case DELETE_TODO: {
            const todoList = state.todoList.filter(item => item.id !== action.payload.id);
            return {todoList: todoList};
        }
        default:
            return state;
    }
};

export default TodoReducer;
