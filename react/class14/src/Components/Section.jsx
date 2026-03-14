import React, { useContext } from 'react'
import {PostdataContext} from '../Context/PostContext'

const Section = () => {
    const name=useContext(PostdataContext)
  return (
    <div className=' h-screen w-full bg-indigo-300 text-white  '>
        <h1 className='text-3xl'>This is section of  {name}</h1>
    </div>
  )
}

export default Section
