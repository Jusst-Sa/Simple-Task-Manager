import './ColumnContainer.css'
import { TaskContext } from "../contexts/TaskContext";
import { useContext, useMemo, useState } from 'react';
import { SortableItem } from './SortableItem';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

function ColumnContainer({col}) {
    const [,,tasks, setTasks] = useContext(TaskContext)

     const tasksInThisColumn = tasks.filter(task => task.status === col.id);

     

     const tasksIds = useMemo(() => {
        return tasksInThisColumn.map((task) => task.id);
     }, [tasksInThisColumn])

    


  return (
    <>
        <div className="colcol">
            <div className='col-title'>{col.title}</div>
            <div className='col-content'>
                            
                            <SortableContext
                                items={tasksIds}
                                strategy={verticalListSortingStrategy}
                            >
                                {/* we put here components that use the useSortable hook */}
                                {tasksInThisColumn.map(task => <SortableItem key={task.id} id={task.id} task={task}/>)}
                            </SortableContext>
            </div>
        </div>
    </>
  )
}

export default ColumnContainer