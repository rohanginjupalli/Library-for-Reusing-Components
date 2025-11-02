import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

interface Car{
    id:string;
    name:string;
    cost:number;
}

interface CarState {
  searchTerm: string;
  data: Car[];
}

const initialState: CarState = {
  searchTerm: "",
  data: [],
};

const carsSlice = createSlice({
    name:'cars',
    initialState,
    reducers:{
        changeSearchTerm(state,action:PayloadAction<string>){
            state.searchTerm = action.payload
        },
        addCar(state,action:PayloadAction<{name:string;cost:number}>){
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state,action:PayloadAction<Car>){
            const updated = state.data.filter((car)=>{
                return (action.payload.id!=car.id)
            })
            state.data = updated;
        }
    }

})

export const {addCar,removeCar,changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer 