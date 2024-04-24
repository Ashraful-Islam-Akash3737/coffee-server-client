
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-4 md:m-20'>
      <h1 className='text-4xl md:text-6xl text-center text-purple-600 font-bold mb-4'>Coffee Emporium</h1>
      <p className='text-center'>total Coffee: {loadedCoffees?.length}</p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 my-20">
        {
          loadedCoffees?.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
