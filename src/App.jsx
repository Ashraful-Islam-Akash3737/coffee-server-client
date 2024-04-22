
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <div className=' m-20'>
      <h1 className='text-6xl text-center text-purple-600 font-bold mb-4'>Coffee Emporium</h1>
      <p className='text-center'>total Coffee: {coffees.length}</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
