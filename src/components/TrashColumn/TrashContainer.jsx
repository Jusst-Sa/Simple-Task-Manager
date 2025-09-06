import React from "react";
import trashh from "/images/trash.png";
import { useContext, useMemo } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { motion, scale } from "motion/react";

function TrashContainer({trash, isOver}) {
  const [, , tasks, setTasks, , , readyToDelete] = useContext(TaskContext);

  const tasksInThisColumn = tasks.filter((task) => task.status != trash.id);

  const tasksIds = useMemo(() => {
    return tasksInThisColumn.map((task) => task.id);
  }, [tasksInThisColumn]);
  return (
    <>
      <SortableContext items={tasksIds} strategy={verticalListSortingStrategy}>
        <div className="trash-container">
          <motion.div className="trash-content" 
          animate={isOver && readyToDelete ? {scale: 1.1} : {scale: 1}}
          
          >
            <img src={trashh} alt="trash-icon" className="trash-icon" />
          </motion.div>
        </div>
      </SortableContext>
    </>
  );
}

export default TrashContainer;
