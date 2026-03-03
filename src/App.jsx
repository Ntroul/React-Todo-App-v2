import './App.css';

import NavButton from './components/navButton';
import AllTasks from './pages/All-tasks';
import PendingTasks from './pages/Pending-Tasks';

import { useState } from 'react';


function App() {

  const [buttonContent , setContent] = useState("all-tasks");

  function handleButton(newContent){
    setContent(newContent)
  }

  return (
    <div>
      <nav>
        <NavButton click={() => handleButton("all-tasks")}>All Tasks</NavButton>
        <NavButton click={() => handleButton("pending-tasks")}>Pending Tasks</NavButton>
      </nav>
      <main>
        {buttonContent === "all-tasks" && <AllTasks></AllTasks>}
        {buttonContent === "pending-tasks" && <PendingTasks></PendingTasks>}
      </main>
    </div>
    
  )
}

export default App
