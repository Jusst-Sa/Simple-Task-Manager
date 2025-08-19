import React from "react";
import "./TaskComponent.css";

// import Draggable from "react-draggable";
import { motion } from "motion/react";

function TaskComponent({ text }) {

  return (
    <>
    <motion.div className="task-card-unset" drag whileTap={{ scale: 0.9 }}>
            <p className="card-content">{text}</p>
            {/* <p className='card-content'>{input}</p> */}
            {/* {tasks.map((task)=>(
          <p key={task.id} className='card-content'>{task.text}</p>
        ))} */}
      </motion.div> 
    
    </>
  );
}

export default TaskComponent;
