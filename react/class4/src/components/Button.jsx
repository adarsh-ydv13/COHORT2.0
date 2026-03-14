import React from 'react'

const Button = () => {
  return (
    <div>
      <button   onClick={function(){
        console.log("button clivked")
      }}  className='bg-green-600  rounded text-2xl h-20 w-fit px-0.5 mt-2 font-bold text-white border-2'>Click on Me!!!!!!</button>
    </div>
  )
}

export default Button
