import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1 className='h-64 w-full text-4xl'>
        This is Home Page
      </h1 >
      <button onClick={()=>{
        navigate('/product')
      }} className='bg-emerald-400 border-2 '>Explore Products</button>
    </div>
  )
}

export default Home
