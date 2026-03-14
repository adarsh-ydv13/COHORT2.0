import React from 'react'
import Section from '../components/Section'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'

const App = () => {
 
  return (
    <div className=''>
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
      </Routes>
    
    </div>
  )
}

export default App
