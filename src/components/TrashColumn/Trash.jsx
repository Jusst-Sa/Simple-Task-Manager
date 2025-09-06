import React from "react";
import "./Trash.css";
import TrashContainer from "./TrashContainer";
import { useDroppable } from "@dnd-kit/core";
import { TaskContext } from "../contexts/TaskContext";
import { useContext } from "react";

function Trash() {
  const [, , , , , trashCol] = useContext(TaskContext);

  return (
    <>
      <div>
        {trashCol.map((trash) => {
          const { setNodeRef, isOver } = useDroppable({ id: trash.id });
          // console.log(isOver);
          
          return (
            <>
              <div ref={setNodeRef} className="">
                <TrashContainer key={trash.id} trash={trash} isOver={isOver}/>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Trash;
