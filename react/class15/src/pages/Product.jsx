import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {productdatacontext} from '../context/Productcontext'

const Product = () => {
    const data=useContext(productdatacontext)
  return (
    <div className='flex flex-wrap gap-4 ml-20'>
        {data.map((ele,idx)=>{
            return <Link key={idx} to={`/product/${ele.id}`}>
                 <div className='cursor-pointer active:scale-90  rounded-sm w-[200px] h-[250px] flex border p-2  flex-col items-center ' key={idx}>
                    <img src={ele.image } className='object-contain h-[120px]' alt="" />
                    <p className='text-sm text-center mt-2'> {ele.title}</p>
                   
                 </div>
            </Link>
        })}
    </div>
  )
}

export default Product
