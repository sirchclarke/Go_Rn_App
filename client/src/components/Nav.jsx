import React from 'react'
import { NavLink} from 'react-router-dom'
import gorn from '../images/gorn.png'


const Nav = () => {
  return (
    
    <div className='NavContainer'>
<div>
        <img className="logo" src={gorn} alt=''/>
        </div>
    
       <div className='NavBar'> 
        <NavLink to='/'>Home</NavLink>
        
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/listings'>Listings</NavLink>
        <NavLink to='/listing'>Add Listing</NavLink>
        </div>
    </div>
  )
}

export default Nav