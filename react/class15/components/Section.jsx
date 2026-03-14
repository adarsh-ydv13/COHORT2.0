import  React,{ useEffect, useState }  from 'react'
import axios from 'axios'

const Section = () => {
    const [product, setproduct] = useState([]);
    useEffect(()=>{
        getdata()
    })
    const getdata=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    setproduct(response.data)
 } 
  useEffect(()=>{
        getdata()
    },[])
  return (
    <div></div>
  )
}

export default Section
