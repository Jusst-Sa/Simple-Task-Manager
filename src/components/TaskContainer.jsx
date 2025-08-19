import React from 'react'
import TaskComponent from './TaskComponent'
import TaskInput from './TaskInput'
import { useState } from 'react'
import { TaskContext } from './contexts/TaskContext'
import './TaskContainer.css'


function TaskContainer() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  

  return (
    <>
    <TaskContext.Provider value={[input, setInput, tasks, setTasks]}>
    <TaskInput/>
     <div>
      {tasks.length > 0 ? tasks.map(task => (
        <TaskComponent key={task.id} text={task.text} />
      )) : <div className="no-task-div">
              <h1>You did not input a task</h1>
        </div> }
      
      </div>
    </TaskContext.Provider>
    </>
  )
}

export default TaskContainer