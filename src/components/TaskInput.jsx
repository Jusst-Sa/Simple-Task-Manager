import React, { useState } from 'react'
import './TaskInput.css'
import { useContext } from 'react';
import { TaskContext } from './contexts/TaskContext';
import { motion, scale } from 'motion/react';
import TaskComponent from './TaskComponent';

function TaskInput() {


  const [input, setInput, tasks, setTasks] = useContext(TaskContext) 
  

  const addTask = () => {
    if(input){
      setTasks([...tasks, {id: Date.now(), text: input, status: 'todo' }])
      setInput("");
    }
  }

  return (
    <>
    <div className='input-div'>
    <input 
    className='input-component' 
    type="text" 
    value={input}
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
    <motion.div whileTap={{ scale: 0.9 }}>
    <button className='task-add' 
    onClick={() => {addTask();}}
    >Add Task</button>
    </motion.div>
    </div>
    </>
  )
}

export default TaskInput