import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div className='h-10 w-full bg-red-500 flex justify-between items-center px-4'>
      <div>Navbar</div>
      <input type="text"  className='border-black border-2'   placeholder='enter your name' />
      <div className='flex gap-4 text-white font-semibold text-2xl '>
         <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link></div>
     
    </div>
  )
}

export default Nav
