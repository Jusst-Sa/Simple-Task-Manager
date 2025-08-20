// TaskComponent.jsx
import React from "react";
import "./TaskComponent.css";
import { motion } from "motion/react";

function TaskComponent({ text }) {
  return (
    <motion.div
      className="task-card-unset"
      whileTap={{ scale: 0.97 }}
    >
      <p className="card-content">{text}</p>
    </motion.div>
  );
}

export default TaskComponent;
