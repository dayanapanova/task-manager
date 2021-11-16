import React, { createContext, useState } from 'react';
import * as uuid from 'uuid';

export const TaskListContext = createContext();

export const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { title: 'Read the book', id: '1' },
        { title: 'Wash the car', id: '2' },
        { title: 'Walk the dog', id: '3' },
    ])

    const [editItem, setEditItem] = useState(null);

    const addTask = (title) => {
        setTasks([...tasks, { title, id: uuid() }])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const clearTasks = () => {
        setTasks([]);
    }

    const editTask = (title, id) => {
        const newTask = tasks.map(task => task.id === id ? { title, id } : task)
        setTasks(newTask)
        setEditItem(null);
    }

    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }

    return (
        <TaskListContext.Provider value={
            tasks,
            addTask,
            removeTask,
            clearTasks,
            findItem,
            editItem,
            editTask
        }>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
