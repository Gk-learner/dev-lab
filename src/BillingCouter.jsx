import React, { useState, useEffect } from "react";
import "./styles.css";

export default function BillingCounter() {
  const [counter, setCounter] = useState('')
  // const 
  const handleCounter = (e) => {
  }
  const handleCreateCounter = (e) => {
    setCounter(e.target.value)

  }
  useEffect(() => {
    console.log(counter)
  },[counter])
  return (
    <>
      <div className="billing-container" data-testid="billing-container">
        <h2 data-testid="heading">Billing Counter System</h2>
        <div className="input-section" data-testid="counter-input-section">
          <input
            data-testid="counter-input"
            type="number"
            placeholder="Number of counters"
            onChange={(e) => handleCreateCounter(e)}
          />
          <button
            onClick={() => handleCounter()} data-testid="set-counter-button">
            Set Counters
          </button>

        </div>
        {[...Array(counter)].map((_, index) => {
          <div key={index}
            style={{ border: "2px solid grey", padding: "2px", width: "40px", height: "40px" }}>hello</div>
        })}
      </div >
    </>

  );
}
