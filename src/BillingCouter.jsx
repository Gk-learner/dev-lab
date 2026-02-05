import React, { useState, useEffect } from "react";
// import "./styles.css";

export default function BillingCounter() {
  const [counter, setCounter] = useState([])
  const [buttonText, setButtonText] = useState('Set Counters')
  const [addCounter, setAddCounter] = useState()
  const [customer,setCustomer] = useState('')
  const [item, setItem] = useState([])
  const [array, setArrays] = useState([])

  const handleCounter = () => {
    setAddCounter(counter)
    setButtonText("Add Customer")
  }
  const addCustomer = () => {
    console.log("Adding customer", addCounter, customer);
    setItem([...item, customer])
    console.log(Array.from({ length: counter }, () => []))
 const arr = Array.from({ length: counter }, () => [])
   setArrays(arr)
  }

  return (
    <>
      <div className="billing-container" data-testid="billing-container">
        <h2 data-testid="heading">Billing Counter System</h2>
        <div className="input-section" data-testid="counter-input-section">
          <input
            data-testid="counter-input"
            // value={counter}
            type="number"
            placeholder={`${!addCounter ? "Number of counters" : "Enter Quantity"}`}
            onChange={(e) =>
              !addCounter
                ? setCounter(Number(e.target.value))
                : setCustomer(Number(e.target.value))}
          />
          <button
            onClick={() => !addCounter ? handleCounter() : addCustomer()} data-testid="set-counter-button">
            {buttonText}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
         {addCounter &&
  Array.from({ length: addCounter }).map((_, index) => (
    <div
      key={index}
      style={{
        border: "1px solid lightGrey",
        padding: "10px",
        height: "fit-content",
        fontWeight: "bold"
      }}
    >
      Counter {index + 1}

      <div
        style={{
          marginTop: "10px",
          border: "1px solid grey",
          width: "30%",
          margin: "5px auto"
        }}
      >
        {item.map((itm, idx) =>
          idx % addCounter === index ? (
            <div key={idx}>{itm}</div>
          ) : null
        )}
      </div>
    </div>
  ))}
</div>
      </div>
    </>

  );
}
