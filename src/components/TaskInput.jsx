import React from 'react'
import './TaskInput.css'
import { useContext } from 'react';
import { TaskContext } from './contexts/TaskContext';
import TaskComponent from './TaskComponent';

function TaskInput() {

  const [input, setInput, tasks, setTasks] = useContext(TaskContext) 

  const addTask = () => {
    setTasks([...tasks, {id: Date.now(), text: input }])
  }

  return (
    <>
    <div className='input-div'>
    <input 
    className='input-component' 
    type="text" 
    placeholder='Enter a task'
    onChange={(event) => {
      setInput(event.target.value);
    }}
    onKeyDown={(event) => {
      if(event.key === 'Enter'){
        addTask();
      }
    }}
    />
    <button className='task-add' 
    onClick={() => {addTask();}}
    
    >Add Task</button>
    </div>
    </>
  )
}

export default TaskInput