import { useContext, useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { SortableItem } from './SortableItem'
import { TaskContext } from '../contexts/TaskContext'

function TaskColumn() {

    
    const [,,tasks, setTasks] = useContext(TaskContext)

    function handleDragEnd(event){
        // console.log('drag end called');
        const { active, over } = event;

        if( active.id !== over.id){
            setTasks((tasks)=>{
                const activeIndex = tasks.findIndex((task) => { return task.id === active.id})
                const overIndex = tasks.findIndex((task) => { return task.id === over.id})


                //array move function
                // [1, 2, 3] ---> if we move 1 to be at the bottom it will change to this [2, 3, 1]
                // arrayMove();
               return arrayMove(tasks, activeIndex, overIndex);

            })
        }
    }
    

  return (
    <>
        <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={tasks}
                strategy={verticalListSortingStrategy}
            >
                {/* we put here components that use the useSortable hook */}
                {tasks.map(task => <SortableItem key={task.id} id={task.id} task={task}/>)}
            </SortableContext>
        </DndContext>
    </>
  )
}

export default TaskColumn