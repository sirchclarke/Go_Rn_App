import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import gorn from '../images/gorn.png'


const Nav = () => {
  return (
    <div className='NavContainer'>
<div>
        <img src={gorn}/>
        </div>
    
           <div className='NavBar'> 
        <NavLink to='/'>Home</NavLink>
        <NavLink to='About'>About</NavLink>
        <NavLink to='/listings'>Listings</NavLink>
        
      
        </div>
    </div>
  )
}

export default Nav