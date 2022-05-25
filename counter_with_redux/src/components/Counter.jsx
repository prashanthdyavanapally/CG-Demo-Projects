import React from 'react'
import { addCount, subCount } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'

export const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector(store => store.count)
    return (
        <div>
            <h1>Counter Application</h1>
            <h2>Count:{state}</h2>
            <button onClick={() => {
                dispatch(addCount(1))
            }}>Add</button>
            <button onClick={() => {
                dispatch(subCount(1))
            }}>Reduce</button>
        </div>
    )
}
