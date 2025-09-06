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
          const { setNodeRef } = useDroppable({ id: trash.id });
          // console.log(isOver);
          
          return (
            <>
              <div key={trash.id} ref={setNodeRef} className="">
                <TrashContainer trash={trash}/>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Trash;
