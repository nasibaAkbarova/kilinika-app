import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 px-15 bg-emerald-300">
  <h1>logo</h1>
  <div className="flex items-center gap-5">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/layout">Layout</NavLink>
    <NavLink to="/banner">Banner</NavLink>
  </div>
</nav>

  )
}

export default Navbar
