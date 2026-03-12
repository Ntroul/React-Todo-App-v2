import { useState } from "react";

export default function AllTasks() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);


    function addTask() {
        setTasks([tasks, task])
    }

    return (
        <div className="all-tasks-container">
            <div className="header">
                <h2>All your Tasks</h2>
            </div>
            <div className="Tasks-section">
                <div className="user-input">
                    <label htmlFor="task-input">Write a Task</label>
                    <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                    <button type="submit" onClick={addTask}>+</button>
                </div>
                <div className="tasks">
                    {tasks.map((todos, index) => (
                        <p key={index}>{todos}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}