import React from 'react'
import './TaskComponent.css'
import { useContext } from 'react'
import { TaskContext } from './contexts/TaskContext'

function TaskComponent({text}) {

    // console.log(Date.now());

    // const [, ,tasks,] = useContext(TaskContext)
    

  return (
    <>
    
    <div className='task-card-unset'>
      <p className='card-content'>{text}</p>
        {/* <p className='card-content'>{input}</p> */}
        {/* {tasks.map((task)=>(
          <p key={task.id} className='card-content'>{task.text}</p>
        ))} */}
    </div>
    </>
  )
}

export default TaskComponent