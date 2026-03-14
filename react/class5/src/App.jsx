import { useState } from 'react'
import './App.css'
import React from 'react'


const App = () => {
const [a, seta] = useState(0);

   let buttonclicked=()=>{
    console.log("button clicked")
    seta(a+1)
}

  return (
    <div>
      <h1>{a}</h1>
       <button onClick={buttonclicked}>increase</button>
    </div>
  )
}

export default App


