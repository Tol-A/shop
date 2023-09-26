import React from 'react'
import './NavBarStyle.css'
import { NavLink } from 'react-router-dom'
import { PaperPlaneRight, ShoppingCart } from 'phosphor-react'

export const NavBar = () => {
  return (
    <div className='header'>
    <label>My Shop <PaperPlaneRight size={32} className='label' /></label>
    <nav className="navbar_links">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/about"> My tasks </NavLink>
      <NavLink to="/cart"> <ShoppingCart size={32}/> </NavLink>
  </nav>
</div>
  )
}
