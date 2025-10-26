import React from 'react'
// import Table from '../components/Table'
import SortableTable from '../components/SortableTable'
function TablePage() {

    const data = [
        {name:'orange',color:"bg-orange-500",score:5},
        {name:'Apple',color:"bg-red-500",score:3},
        {name:'Banana',color:"bg-yellow-500",score:1},
        {name:'Lime',color:"bg-green-500",score:4}
    ]

    const config = [
        {
            label:'Name',
            render:(fruit) => fruit.name,
            sortValue : (fruit)=> fruit.name
        },
        {
            label:'Color',
            render:(fruit) => <div className={`p-3 m-2 ${fruit.color}`} ></div>
        },
        {
            label:'Score',
            render:(fruit) => <h1>{fruit.score}</h1>,
            sortValue : (fruit)=> fruit.score
        }
    ]



  return (
    <div>
        <SortableTable data={data} config={config} />
    </div>
  )
}

export default TablePage