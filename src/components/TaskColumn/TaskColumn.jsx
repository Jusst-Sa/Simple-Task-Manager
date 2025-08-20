import { useContext, useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { SortableItem } from './SortableItem'
import { TaskContext } from '../contexts/TaskContext'

function TaskColumn() {

    
    const [,,tasks,] = useContext(TaskContext)

    function handleDragEnd(event){
        console.log('drag end');
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