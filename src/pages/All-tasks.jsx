import './All-tasks.css';

import { useState } from "react";

export default function AllTasks() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function editTask(){
        console.log("editWorks")
    }

    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id))
    }

    function addTask() {
        const newTask = {
        id: Date.now(),
        title: task,
        completed: false
    };

        setTasks([...tasks, newTask]);
        setTask("");
    }

    const total = tasks.length;
    const pending = tasks.filter(task => !task.completed).length;
    const completed = tasks.filter(task => task.completed).length;

    return (
        <div className="all-tasks-container">
            <div className="header">
                <h2>All your Tasks</h2>
                <p>View and manage all your tasks in one place</p>
            </div>
            <div className='task-coounter'>
                <p className='grey'>{total} task</p>
                <p className='red'>{pending} pending</p>
                <p className='green'>{completed} Completed</p>
            </div>
            <div className="Tasks-section">
                <div className="user-input">
                    <label htmlFor="task-input">Write a Task</label>
                    <input type="text" onChange={(e) => setTask(e.target.value)}></input>
                    <button type="submit" onClick={addTask} disabled={task === ""}>+</button>
                </div>
                <div className="tasks">
                    {tasks.map((todo) => (
                        <div className='task-item' key={todo.id}>
                        <input type="checkbox" className='item-checkbox'></input>
                            {todo.title}
                        <button onClick={editTask} className='task-item-button-edit'>Edit</button>
                        <button onClick={() => deleteTask(todo.id)} className='task-item-button'>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}