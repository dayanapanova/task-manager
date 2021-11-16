import React, { createContext, useState, useEffect } from 'react';
import * as uuid from 'uuid';

export const TaskListContext = createContext();

export const TaskListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem(tasks) || []);

    const [tasks, setTasks] = useState([tasks])

    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify([tasks]))
    }, [tasks])

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
