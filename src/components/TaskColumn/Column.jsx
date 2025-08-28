import ColumnContainer from './ColumnContainer'
import './Column.css'
import { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'
import { useDroppable } from '@dnd-kit/core'

function Column() {

    const [,,,,columns] = useContext(TaskContext)


  return (
    <>
      <div className="col-map-par">
      <div className="col-map">
        {columns.map((col) => {
          const { setNodeRef } = useDroppable({ id: col.id });

          return (
            <div  key={col.id} ref={setNodeRef} className="column">
              <ColumnContainer col={col} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default Column