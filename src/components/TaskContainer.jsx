import React from "react";
import TaskComponent from "./TaskComponent";
import TaskInput from "./TaskInput";
import { useState } from "react";
import { TaskContext } from "./contexts/TaskContext";
import "./TaskContainer.css";
import Column from "./TaskColumn/Column";
// import TaskColumn from "./TaskColumn/TaskColumn";

function TaskContainer() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];

  return (
    <>
      <TaskContext.Provider value={[input, setInput, tasks, setTasks, columns]}>
        <TaskInput />

        {/* <div>
          <TaskColumn />
        </div> */}

        <div className="colo">
          <Column />
        </div>

      </TaskContext.Provider>
    </>
  );
}

export default TaskContainer;
