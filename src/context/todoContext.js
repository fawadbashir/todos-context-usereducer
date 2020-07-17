import React, { createContext } from 'react'
import todoReducer from '../reducers/todoReducer'
import {useLocalStorageReducer} from '../hooks/useLocalStorageState'

const defaultTodos = []

export const todoContext = createContext()
export const dispatchContext = createContext()

export const TodosProvider = (props) => {
    const [todos, dispatch] = useLocalStorageReducer('todos',defaultTodos, todoReducer)

    return (
        <todoContext.Provider value={todos}>
            <dispatchContext.Provider value={dispatch}>
            {props.children}
            </dispatchContext.Provider>
        </todoContext.Provider>

    )
} 