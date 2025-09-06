import React from "react";
import TaskComponent from "./TaskComponent";
import TaskInput from "./TaskInput";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { TaskContext } from "./contexts/TaskContext";
import "./TaskContainer.css";
import Column from "./TaskColumn/Column";
import { getDate } from "./utils/date";
import { SortableItem } from "./TaskColumn/SortableItem";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import Trash from "./TrashColumn/Trash";
// import TaskColumn from "./TaskColumn/TaskColumn";

function TaskContainer() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [trashCol, setTrashCol] = useState([{ id: "trash", title: "Trash" }]);
  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
    },
    {
      id: "inProgress",
      title: "In Progress",
    },
    {
      id: "completed",
      title: "Completed",
    },
  ]);

  // const columnId = useMemo(() => {
  //         return columns.map((col) => col.id);
  //      }, [columns])

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
      <TaskContext.Provider
        value={[input, setInput, tasks, setTasks, columns, trashCol]}
      >
        <TaskInput />

        {/* <div>
          <TaskColumn />
        </div> */}
        {tasks.length == 0 ? (
          <div className="cond-header">
            <h2>You did not input a task</h2>
          </div>
        ) : (
          <div />
        )}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={(event) => {
            const isTask = tasks.find((t) => t.id === event.active.id);
            setActiveTask(isTask || null);
          }}
          onDragOver={(event) => {
            const { active, over } = event;
            if (!over) return;

            const activeId = active.id;
            const overId = over.id;

            if (activeId === overId) return;
            const activeIndex = tasks.findIndex((task) => {
              return task.id === active.id;
            });
            const overIndex = tasks.findIndex((task) => {
              return task.id === over.id;
            });

            setTasks((tasks) => {
              const isColumn = columns.find((col) => col.id === overId);
              if (isColumn) {
                tasks[activeIndex].status = overId;
                return [...tasks];
              }
              if(!isColumn){
                // console.log('trash');
                tasks[activeIndex].status = overId;
                tasks.filter((task) => {task.id != overId })
                return [...tasks];
              }

              // tasks[activeIndex].status = tasks[overIndex].status;

              //array move function
              // [1, 2, 3] ---> if we move 1 to be at the bottom it will change to this [2, 3, 1]
              // arrayMove();

              return arrayMove(tasks, activeIndex, overIndex);
            });
            if (tasks[activeIndex].status == "completed") {
              setTasks((tasks) =>
                tasks.map((task, index) => {
                  if (index === activeIndex) {
                    const updatedTask = { ...task, status: "completed" };
                    if (!updatedTask.completedDate) {
                      updatedTask.completedDate = getDate();
                    }
                    return updatedTask;
                  }
                  return task;
                })
              );
            }
          }}
          onDragEnd={() => setActiveTask(null)}
          onDragCancel={() => setActiveTask(null)}
        >
          <div className="colo">
            <Column />
          </div>
          <Trash />
          <DragOverlay>
            {activeTask ? (
              <div>
                <SortableItem id={activeTask.id} task={activeTask} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </TaskContext.Provider>
    </>
  );
}

export default TaskContainer;
