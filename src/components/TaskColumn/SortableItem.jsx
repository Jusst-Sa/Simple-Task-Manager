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
        transition
    } = useSortable({id: id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return(
        <>
            <div className="Task-Div" ref={setNodeRef} style={style} {...attributes} {...listeners}>
                 
                <TaskComponent text={task.text} />
                
            
            </div>
        </>
    )


}