import React, { createContext } from 'react'
import App from '../App'

export const PostdataContext=createContext()

const PostContext = () => {
    const postdata="adarsh"
  return (
    <div>
       < PostdataContext.Provider value={postdata}>
    <App />
      </PostdataContext.Provider>
    </div>
  )
}

export default PostContext
