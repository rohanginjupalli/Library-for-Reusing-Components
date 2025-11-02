import './App.css'
import CarList from './components/CarList'
import CarValue from './components/CarValue'
import CarForm from './components/CarForm'
import CarSearch from './components/CarSearch'
function App() {
  
  return (
    <div className='container is-fluid' >
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App
