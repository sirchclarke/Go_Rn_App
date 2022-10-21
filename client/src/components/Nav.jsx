import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>Nav
        <img src="" alt="logo" />
            <NavLink to='/'>Home</NavLink>
        <NavLink to='About'>About</NavLink>
    </div>
  )
}

export default Nav