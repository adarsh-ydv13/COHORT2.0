import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Help from './pages/Help'
import Contact from './pages/Contact'
import Director from './pages/Director'
import Hr from './pages/Hr'
import Projectmanager from './pages/Projectmanager'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
           <Route path='/help' element={<Help/>}> 
            <Route path='/help/director' element={<Director/>}/> 
            <Route path='/help/hr' element={<Hr/>}/> 
            <Route path='/help/project-manager' element={<Projectmanager/>}/> 
           </Route>
      </Routes>
    </div>
  )
}

export default App
