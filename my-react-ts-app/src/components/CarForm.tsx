import { useDispatch, useSelector } from "react-redux"
import { changeName , changeCost ,addCar } from "../store";
import type { AppDispatch, RootState } from "../store";

function CarForm() {

  const dispatch = useDispatch<AppDispatch>()

  const name = useSelector((state:RootState) => state.form.name);
  const cost = useSelector((state:RootState) => state.form.cost);


  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(changeName(event.target.value))
    
  }

  const handleCostChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const carCost:number = parseInt(event.target.value)
    dispatch(changeCost(carCost))
    
  }


  const handleSubmit = ((event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    dispatch(addCar({
      name,
      cost
    }))
  })


  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit} >
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">cost</label>
            <input
              className="input is-expanded"
              value={cost||''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>

        <div className="field" >
          <button className="button is-link" >Submit</button>
        </div>

      </form>
    </div>
  )
}

export default CarForm