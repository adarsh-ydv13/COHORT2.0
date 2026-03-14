import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
const App = () => {
  return (
    <div> 
      <div></div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}  />
            <Route path='/about' element={<About/>}  />
            <Route path='/product' element={<Product/>} />
            <Route path='/product/men' element={<Men/>} />
             <Route path='/product/women' element={<Women/>} />
      </Routes>
    </div>
  )
}

export default App
