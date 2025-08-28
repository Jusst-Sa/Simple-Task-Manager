import ColumnContainer from './ColumnContainer'
import './Column.css'
import React from 'react'
import { useState } from 'react'

function Column() {

    const [columns, setColumns] = useState([
        {
            id: 'todo',
            title: 'To Do',
    },
    {
        id: 'inProgress',
            title: 'In Progress',
    },
    {
        id: 'completed',
            title: 'Completed',
    }])


  return (
    <>
    <div className='col-map-par'>
        <div className='col-map'>
            {columns.map((col) => (
                <ColumnContainer key={col.id} col={col}/>
            ))}
        </div>
        </div>
    </>
  )
}

export default Column