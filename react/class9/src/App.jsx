import React,{ useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {
 const [allData, setallData] = useState([]);
  async function getdata() {
   
    let response= await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setallData(response.data)
    console.log(response)
  }
  return (
    <div className='allcard'>
        <button onClick={getdata}
         style={{padding:"10px", border:"1px solid black", background:"lightgray"}}>get data</button>
         
      {allData.map(function(elem,idx){
          return <div key={idx}><Card elem={elem}  /></div>
      })}

    </div>
  )
}

export default App