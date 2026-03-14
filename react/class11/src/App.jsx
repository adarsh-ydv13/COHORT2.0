import { useState } from 'react'
import React, { useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [user, setuser] = useState('');
  const [inputt, setinputt] = useState();
  const getdata=async ()=>{
    let response=await axios.get('https://randomuser.me/api/')
    setuser(response.data.results[0].name.first+' '+response.data.results[0].name.last)
  }
  useEffect(function(){
    getdata()
  },[inputt])
  
  return (
    <div>
      {user}
      <br /><br />
      <input onChange={(e)=>{
       setinputt( e.target.value)
      }
      } type="text" 
      placeholder='enter your name'/>
    </div>
  )
}

export default App
