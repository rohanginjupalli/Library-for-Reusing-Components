import type { AppDispatch  } from "../store"
import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

interface Car{
  id:string;
  name:string;
  cost:number
}

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) =>
    data.filter((car:Car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {

  const dispatch = useDispatch<AppDispatch>()

  const cars = useSelector(memoizedCars);

  const handleDeleteClick = (car:Car)=>{
    dispatch(removeCar(car))
  }

  const renderedCars = cars.map((car:Car)=>{
    return (
      <div key={car.id} className="panel" >
        <p>
          {car.name} -  ${car.cost} 
        </p>
        <button className="button is-danger" onClick ={()=>handleDeleteClick(car)} >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList