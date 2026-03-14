import React from 'react'
import {    NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='h-10 w-full bg-black flex justify-between items-center text-white '>
       <div>Navbar</div> 
        <div className='flex gap-10'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/help'>Help</NavLink>
        </div>
    </div>
  )
}

export default Navbar
