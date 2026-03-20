import './App.css';

import NavButton from './components/navButton';
import AllTasks from './pages/All-tasks';
import PendingTasks from './pages/Pending-Tasks';
import CompletedTasks from './pages/Completed-Tasks';
import Calendar from './pages/Calendar';

import { useState } from 'react';


function App() {

 const [buttonContent , setButtonContent] = useState("all-tasks");

 function handleButton(content){
    setButtonContent(content);
 }

  return (
    <div className="layout">
      <nav className="side-bar">
        <div className='logo'>Kane-To</div>
        <NavButton active={buttonContent === "all-tasks"} click={() => handleButton("all-tasks")}>All tasks</NavButton>
        <NavButton active={buttonContent === "pending-tasks"} click={() => handleButton("pending-tasks")}>Pending tasks</NavButton>
        <NavButton active={buttonContent === "completed-tasks"} click={() => handleButton("completed-tasks")}>Completed tasks</NavButton>
        <NavButton active={buttonContent === "achivements"} click={() => handleButton("achivements")}>Achivements</NavButton>
        <NavButton active={buttonContent === "calendar"} click={() => handleButton("calendar")}>Calendar</NavButton>              
      </nav>
      <main className='content'>
        {buttonContent === 'all-tasks' && <AllTasks></AllTasks>}
        {buttonContent === 'pending-tasks' && <PendingTasks></PendingTasks>}
        {buttonContent === 'completed-tasks' && <CompletedTasks></CompletedTasks>}
        {buttonContent === 'calendar' && <Calendar></Calendar>}
      </main>
    </div>
    
  )
}

export default App
