
import {useState, useEffect}  from 'react';
import Header from'./components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


 useEffect(() =>{
    const fetchTask = async () => {
      const res = await fetch ('http://localhost:3000/task')
    }
  },[])

// delete task

const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
}

// Toggle Remainder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder } : task))
}

// Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000)+1
  const newTask= {id, ...task}
  setTasks([...tasks, newTask])
}
 
  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : ('No Task To Show')
      }
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello From class</h1>
//   }
//}
export default App;
