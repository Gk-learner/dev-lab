// 

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
  <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <NavLink to="/">Guess The Number</NavLink>
      <NavLink to="/progress">Progress Bar</NavLink>
      <NavLink to="/accordion">Accordion</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/mode-toggle">Mode Toggle</NavLink>
      <NavLink to="/zigzag-string">Zigzag String</NavLink>
      <NavLink to="/kanban-board">Kanban Board</NavLink>
      <NavLink to="/toast">Toast</NavLink>
      <NavLink to="/billing-counter">Billing Counter</NavLink>
    </nav>
  )
}

export default Navbar
