import { TASKS } from "../tasks";

export default function AllTasks(){
    return(
        <div className="all-tasks-container">
            <div className="header">
                <h2>All the Tasks</h2>
            </div>
            <div className="Tasks-section">
                <div className="tasks">
                   {TASKS.map((task,index) =>(
                    <div key={index} className="task">
                        <p>{task.name}</p>
                        <p>{task.description}</p>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    )
}