import React from 'react'
import { useLocation } from "react-router-dom"
import { Outlet,Link } from "react-router-dom"


const Help = () => {
    const location=useLocation()
  return (
    <div>
      <h1 className='text-3xl flex  font-semibold underline mt-2.5 justify-center items-center bg-red-500'>
      <p>Do you need help? We got you! </p>
       <p>Do you need help? We got you! </p>
      </h1>
      

      {location.pathname==="/help" &&(
        <div className='h-56 w-full    absolute bottom-1/12 flex justify-evenly underline text-2xl text-black '>
             <Link to='/help/hr'>Hr</Link>
        <Link to='/help/director'>Director</Link>
        <Link to='/help/project-manager'>Project Manager</Link>
        
        </div>
      )}
      <Outlet/>
    </div>
  )
}

export default Help
