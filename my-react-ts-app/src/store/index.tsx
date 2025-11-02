import {configureStore} from '@reduxjs/toolkit'

import {
    carsReducer,
    addCar,
    removeCar,
    changeSearchTerm
} from './slices/CarSlices'

import { changeCost,changeName,formReducer} from './slices/formSlice'

const store = configureStore({
    reducer:{
        cars:carsReducer,
        form:formReducer
    }
})

export{
    store,
    addCar,
    removeCar,
    changeSearchTerm,
    changeCost,
    changeName
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;