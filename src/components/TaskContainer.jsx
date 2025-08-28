import React from "react";
import TaskComponent from "./TaskComponent";
import TaskInput from "./TaskInput";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { TaskContext } from "./contexts/TaskContext";
import "./TaskContainer.css";
import Column from "./TaskColumn/Column";
import { SortableItem } from "./TaskColumn/SortableItem";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
// import TaskColumn from "./TaskColumn/TaskColumn";

function TaskContainer() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "done", title: "Done" },
  ];

  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <>
      <TaskContext.Provider value={[input, setInput, tasks, setTasks, columns]}>
        <TaskInput />

        {/* <div>
          <TaskColumn />
        </div> */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={(event) => {
            const dragged = tasks.find((t) => t.id === event.active.id);
            setActiveTask(dragged || null);
          }}
          onDragOver={(event) => {
            const { active, over } = event;
            if (!over) return;

            const activeId = active.id;
            const overId = over.id;

            if (activeId === overId) return;

            setTasks((tasks)=>{
            const activeIndex = tasks.findIndex((task) => {
              return task.id === active.id;
            });
            const overIndex = tasks.findIndex((task) => {
              return task.id === over.id;
            });

            //array move function
            // [1, 2, 3] ---> if we move 1 to be at the bottom it will change to this [2, 3, 1]
            // arrayMove();
            return arrayMove(tasks, activeIndex, overIndex);
          })
          }}
          onDragEnd={() => setActiveTask(null)}
          onDragCancel={() => setActiveTask(null)}
        >
          <div className="colo">
            <Column />
          </div>
          <DragOverlay>
            {activeTask ? (
              <SortableItem id={activeTask.id} task={activeTask} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </TaskContext.Provider>
    </>
  );
}

export default TaskContainer;
