import React from "react";
import trashh from "/images/trash.png";
import { useContext, useMemo } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { motion, scale } from "motion/react";

function TrashContainer({trash}) {
  const [, , tasks, setTasks] = useContext(TaskContext);

  const tasksInThisColumn = tasks.filter((task) => task.status != trash.id);

  const tasksIds = useMemo(() => {
    return tasksInThisColumn.map((task) => task.id);
  }, [tasksInThisColumn]);
  return (
    <>
      <SortableContext items={tasksIds} strategy={verticalListSortingStrategy}>
        <div className="trash-container">
          <motion.div className="trash-content" 
          
          
          >
            <img src={trashh} alt="trash-icon" className="trash-icon" />
          </motion.div>
        </div>
      </SortableContext>
    </>
  );
}

export default TrashContainer;
