// 

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/">Guess The Number</NavLink>
      <NavLink to="/progress">Progress Bar</NavLink>
      <NavLink to="/accordion">Accordion</NavLink>
    </nav>
  )
}

export default Navbar
