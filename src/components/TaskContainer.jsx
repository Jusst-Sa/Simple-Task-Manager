import React from 'react'
import TaskComponent from './TaskComponent'
import TaskInput from './TaskInput'
import { useState } from 'react'
import { TaskContext } from './contexts/TaskContext'


function TaskContainer() {

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <>
    <TaskContext.Provider value={[input, setInput, tasks, setTasks]}>
    <TaskInput/>
     <div>
      {tasks.map(task => (
        <TaskComponent key={task.id} text={task.text} />
      ))}
      </div>
    </TaskContext.Provider>
    </>
  )
}

export default TaskContainer