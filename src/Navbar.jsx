// 

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/">Guess The Number</NavLink>
      <NavLink to="/progress">Progress Bar</NavLink>
      <NavLink to="/accordion">Accordion</NavLink>
      <NavLink to ="/profile">Profile</NavLink>
      <NavLink to ="/mode-toggle">Mode Toggle</NavLink>
    </nav>
  )
}

export default Navbar
