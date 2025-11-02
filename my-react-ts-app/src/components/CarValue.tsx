import { useSelector } from "react-redux";
import type { RootState } from "../store";


interface Car{
    id:string;
    name:string;
    cost:number;
}



function CarValue() {

const totalCost = useSelector((state: RootState) => {
    const { data, searchTerm } = state.cars;


    const filteredCars = data.filter((car:Car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let cost = 0;
    for (let car of filteredCars) {
      cost += car.cost;
    }

    return cost;
  });
  

  return (
    <div>
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue