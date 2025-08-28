import './ColumnContainer.css'
import { TaskContext } from "../contexts/TaskContext";
import { useContext } from 'react';
import { SortableItem } from './SortableItem';

function ColumnContainer({col}) {
    const [,,tasks, setTasks] = useContext(TaskContext)

     const tasksInThisColumn = tasks.filter(task => task.status === col.id);
  return (
    <>
        <div className="colcol">
            <div className='col-title'>{col.title}</div>
            <div className='col-content'>
                {tasksInThisColumn.map(task => <SortableItem key={task.id} id={task.id} task={task}/>)}
            </div>
        </div>
    </>
  )
}

export default ColumnContainer