import React from 'react'
import { Fragment } from 'react'

function Table({data , config}) {

    const renderedheaders= config.map((column)=>{
        if(column.header)
            return <Fragment key={column.label} >{column.header()}</Fragment>
        return <th key={column.label} >{column.label}</th>
    })

    const renderedTable = data.map((rowData)=>{

        const renderedCells = config.map((column)=>{
            return <td className='p-2'>{column.render(rowData)}</td>
        })

        return <tr className='border-b' key={rowData.name}>
                {renderedCells}    
            </tr>
    })

  return (
    <table className='table-auto border-spacing-2' >
        <thead>
            <tr className='border-b-2' >
                {renderedheaders}
            </tr>
        </thead>
        <tbody>
            {renderedTable}
        </tbody>
    </table>
  )
}

export default Table