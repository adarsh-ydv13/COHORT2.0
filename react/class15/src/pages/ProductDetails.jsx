import React, { useContext } from 'react'
import { productdatacontext } from '../context/Productcontext'
import { useParams } from 'react-router-dom'



const ProductDetails = () => {
    const productdetailsdata=useContext(productdatacontext)
    const {id}=useParams()
    const selectedproducts=productdetailsdata.find((ele)=>ele.id==id)
    
  return (
    <div className='flex top-1/2 bottom-1/2 h-[100px] w-[100px] bg-amber-950'>
       <img src={selectedproducts.image } className='object-contain h-[120px]' alt="" />
        <p className='text-sm text-center mt-2'> {selectedproducts.title}</p>
                   
    </div>
  )
}

export default ProductDetails
