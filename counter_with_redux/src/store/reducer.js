import { ADD_COUNT, SUB_COUNT, ADD_TODO } from "./actionTypes"

const initState = {
    count: 0,
    todos: []
}

export const reducer = (state = initState, { type, payload }) => {
    // console.log(state);
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + payload
            };
        case SUB_COUNT:
            return {
                ...state,
                count: state.count - payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        default: return state
    }
}