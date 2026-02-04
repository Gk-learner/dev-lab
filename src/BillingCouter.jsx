import React, { useState, useEffect } from "react";
import "./styles.css";

export default function BillingCounter() {
  const [counter, setCounter] = useState(0)
  const [showCounter, setShowCounter] = useState(false);
  const handleCounter = () => {
    setShowCounter(true)
  }

  useEffect(() => {
    console.log(counter)
  }, [counter])
  return (
    <>
      <div className="billing-container" data-testid="billing-container">
        <h2 data-testid="heading">Billing Counter System</h2>
        <div className="input-section" data-testid="counter-input-section">
          <input
            data-testid="counter-input"
            type="number"
            placeholder="Number of counters"
            onChange={(e) => setCounter(Number(e.target.value))}
          />
          <button
            onClick={() => handleCounter()} data-testid="set-counter-button">
            Set Counters
          </button>

        </div>
        {showCounter && [...Array(counter)].map((_, index) => (
          <div key={index}
            style={{ border: "1px solid lightGrey", padding: "10px", width: "40px", height: "40px" }}>{index}</div>
        ))}
      </div >
    </>

  );
}
