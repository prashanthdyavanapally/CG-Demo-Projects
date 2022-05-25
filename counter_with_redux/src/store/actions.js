// action creators
import { ADD_COUNT, SUB_COUNT, ADD_TODO } from "./actionTypes"


export const addCount = (payload) => {
    return {
        type: ADD_COUNT,
        payload: payload
    }
}

export const subCount = (payload) => {
    return {
        type: SUB_COUNT,
        payload: payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}
