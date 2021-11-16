import React, { createContext, useState } from 'react';
import * as uuid from 'uuid';

export const TaskListContext = createContext();

export const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: 'Read the book', id: '1' },
        { title: 'Wash the car', id: '2' },
        { title: 'Walk the dog', id: '3' },
    ])

    const addTask = (title) => {
        setTasks([...tasks, { title, id: uuid() }])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearTasks = () => {
        setTasks([])
    }
    return (
        <TaskListContext.Provider value={tasks, addTask, removeTask, clearTasks}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
