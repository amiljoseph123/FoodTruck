import React from 'react'
// ...............
import './navbar.css'

import {assets} from "../../assets/assets";
const navbar = () => {
  return (
    <div className='app'>
        <img src ={assets.logo} alt=''></img>
        <navbar/>
      
    </div>
  )
}

export default navbar
