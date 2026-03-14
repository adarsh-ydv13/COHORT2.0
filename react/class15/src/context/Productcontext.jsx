import React ,{ createContext, useEffect, useState } from 'react'
import axios from 'axios'
import App from '../App';

export const productdatacontext=createContext()

const Productcontext = (props) => {
  
  const [product, setproduct] = useState([]);
   const getdata=async ()=>{
       const response=await axios.get('https://fakestoreapi.com/products')
       setproduct(response.data)
   }
   useEffect(()=>{
    getdata()
   },[])
  return (
   
    <productdatacontext.Provider  value={product}>
    <div className='flex gap-4 flex-wrap'>
      {props.children}
  
    </div>
      </productdatacontext.Provider>
  )
}

export default Productcontext
