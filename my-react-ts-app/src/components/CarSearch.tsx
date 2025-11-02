import { useDispatch, useSelector } from "react-redux"
import {changeSearchTerm} from '../store' 
import type {  AppDispatch , RootState} from "../store";

function CarSearch() {

  const searchTerm = useSelector((state:RootState)=>{
    return state.cars.searchTerm
  })

  const dispatch = useDispatch<AppDispatch>()

  const handleSearchTermChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(changeSearchTerm(event.target.value))
  }

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  )
}

export default CarSearch