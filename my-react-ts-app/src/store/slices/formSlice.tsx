import {createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { addCar } from "./CarSlices"

interface FormState{
    name:string,
    cost:number
}

const initialState : FormState = {
    name:"",
    cost:0
}

const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        changeName(state, action: PayloadAction<string>) {
        state.name = action.payload;
    },
        changeCost(state, action: PayloadAction<number>) {
        state.cost = action.payload;
    },
    },
    extraReducers(builder){
      builder.addCase(addCar,(state,action)=>{
        state.name=''
        state.cost=0
      })
    }
})

export const {changeName,changeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;