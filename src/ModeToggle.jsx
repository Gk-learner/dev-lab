import React, { useState } from 'react';
import './modeToggle.css'

function DarkModeToggle() {
  const [darkOn, setDarkOn] = useState(false)
  return (
    <div className={`container ${darkOn ? "dark-mode" : "light-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={() => { setDarkOn(!darkOn) }} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {!darkOn ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;