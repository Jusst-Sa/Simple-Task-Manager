import React from "react";
import TaskComponent from "./TaskComponent";
import TaskInput from "./TaskInput";
import { useState } from "react";
import { TaskContext } from "./contexts/TaskContext";
import "./TaskContainer.css";
import TaskColumn from "./TaskColumn/TaskColumn";

function TaskContainer() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskContext.Provider value={[input, setInput, tasks, setTasks]}>
        <TaskInput />

        <div>
          <TaskColumn />
        </div>
      </TaskContext.Provider>
    </>
  );
}

export default TaskContainer;
