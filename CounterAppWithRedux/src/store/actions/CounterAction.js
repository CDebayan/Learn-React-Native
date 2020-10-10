export const INCREMENT = 'Increment';
export const DECREMENT = 'Decrement';

export const increment = () => {
    return {type: INCREMENT,payload : 1};
};

export const decrement = () => {
    return {type: DECREMENT,payload : -1};
};
