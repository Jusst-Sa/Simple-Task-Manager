import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "react-bootstrap/Card";
import TaskComponent from "../TaskComponent";
import { motion } from "motion/react";
import './SortableItem.css'

export function SortableItem({task, id}){
    const { 
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    if(isDragging){
        return(
            <>
            <div ref={setNodeRef}
            style={style}
            className="Task-Div1"
            />
            </>
        )
    }

    return(
        <>
            <div className="Task-Div" ref={setNodeRef} style={style} {...attributes} {...listeners}>
                 
                <TaskComponent  key={task.id} text={task.text} issuedDate={task.issuedDate} completedDate={task.completedDate} status={task.status} />
                
            
            </div>
        </>
    )


}