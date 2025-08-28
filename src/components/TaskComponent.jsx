// TaskComponent.jsx
import React from "react";
import "./TaskComponent.css";
import { motion } from "motion/react";

function TaskComponent({ text, issuedDate, completedDate, status }) {
  return (
    <motion.div
      layout
      className="task-card-unset"
      whileTap={{ scale: 0.97 }}
    >
      <p className="card-content">{text}</p>
      {status != "inProgress" && status != "completed" ? <p>Issued On: {issuedDate}</p> : null}
      {status == "completed" ? <p>Completed On: {completedDate}</p> : null}
    </motion.div>
  );
}

export default TaskComponent;
