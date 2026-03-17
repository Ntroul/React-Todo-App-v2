import './All-tasks.css';

import { useState } from "react";

export default function AllTasks() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function editTask(){
        console.log("editWorks")
    }

    function deleteTask(){
        console.log("deleteWorks")
    }

    function addTask() {
        setTasks([...tasks, task])
    }

    return (
        <div className="all-tasks-container">
            <div className="header">
                <h2>All your Tasks</h2>
                <p>View and manage all your tasks in one place</p>
            </div>
            <div className='task-coounter'>
                <p className='grey'>1 task</p>
                <p className='red'>1 pending</p>
                <p className='green'>1 Completed</p>
            </div>
            <div className="Tasks-section">
                <div className="user-input">
                    <label htmlFor="task-input">Write a Task</label>
                    <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                    <button type="submit" onClick={addTask}>+</button>
                </div>
                <div className="tasks">
                    {tasks.map((todos) => (
                        <div className='task-item' key={todos.id}>
                            {todos}
                        <button onClick={editTask} className='task-item-button-edit'>Edit</button>
                        <button onClick={deleteTask} className='task-item-button'>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}