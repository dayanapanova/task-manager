import React, { useContext, useState } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
    const [addTask, clearTasks] = useContext(TaskListContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title)
        setTitle('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={title} type="text" className="task-input" placeholder="Add Task.." required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button onClick={clearTasks} type="submit" className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm
