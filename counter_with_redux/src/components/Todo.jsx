import React, { useState } from 'react'
import { addCount, subCount, addTodo } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

export const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(store => store.todos)
    const [text, setText] = useState('')
    return (
        <div>
            <h1>Todo Application</h1>
            <input type="text" value={text} placeholder="Enter a Todo" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                const payload = {
                    id: nanoid(4),
                    status: false,
                    title: text
                };
                dispatch(addTodo(payload));
                setText('')
                console.log(payload);
            }}>Add Todo</button>
            {
                todos.map((e, i) => (
                    <div key={i}>
                        <p>{e.title}</p>
                        <p>{e.status}</p>
                    </div>
                ))
            }


        </div>
    )
}
