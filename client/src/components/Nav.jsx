import React from 'react'
import { NavLink, Route } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='NavContainer'>

        <img src="" alt="logo" />
           <div> <NavLink to='/'>Home</NavLink>
        <NavLink to='About'>About</NavLink>
        <NavLink to='/listings'>Listings</NavLink>
      
        </div>
    </div>
  )
}

export default Nav