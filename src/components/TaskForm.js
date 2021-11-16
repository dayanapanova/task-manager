import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const [addTask, clearTasks, editTask, editItem] = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItem === null) {
            addTask(title)
            setTitle('');
        } else {
            editTask(title, editItem.id);
        }
    }
    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title)
        } else {
            setTitle('');
        }
    }, [editItem])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={title} type="text" className="task-input" placeholder="Add Task.." required />
            <div className="buttons">
                <button type="submit"
                    className="btn add-task-btn"
                    {...editItem ? 'Edit' : 'Add'}
                >Add Task</button>
                <button onClick={clearTasks} type="submit" className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
