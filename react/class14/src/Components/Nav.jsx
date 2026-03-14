import React, { useContext } from 'react'
import {PostdataContext} from '../Context/PostContext'

const Nav = () => {
  const data=useContext(PostdataContext)
  return (
    <div className='h-10 w-full bg-emerald-600'>
        <h1>This is navbar of {data}</h1>
    </div>
  )
}

export default Nav
