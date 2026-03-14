import React from 'react'
import { Link } from "react-router-dom"
const Product = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold absolute top-1/2 left-1/2 underline'>Product page</h1>
        <br />
        <div className='flex gap-5 mt-4 '>
            <Link to='/product/men'>Man's product</Link>
             <Link to='/product/women'>woman's product</Link>
        </div>
    </div>
  )
}

export default Product
