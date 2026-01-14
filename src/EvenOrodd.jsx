import React, { useState } from "react";
import "./index.css";

function EvenOrodd() {
  const [num, setNum] = useState("")
//   const [val, setVal] = useState('')
  const [check, showChk] = useState(false)
  const [result, setResult] = useState('')
  const handleClick = () => {
    showChk(true)
    setTimeout(() => {
      let parsedNum = parseInt(num, 10)

      if (isNaN(parsedNum)) {
        setResult('Please enter a valid number.')
      }
      else {
        setResult(`The number ${parsedNum} is ${parsedNum % 2 === 0 ? 'even.' : 'odd.'}`)
      }
      showChk(false)
      setNum('')
    }, 1000)

  }
  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        value={num}
        data-testid="number-input"
        onChange={(e) => { setNum(e.target.value) }}
        placeholder="Enter a number"
      />

      <button
        data-testid="check-button"
        className="check-button" onClick={handleClick}>Check</button>
      {check ? (
        <div
          data-testid="loading"
          className="loading">
          <div className="result">Checking...</div>
        </div>
      ) : result !== null ? (
        <div data-testid="result" className="result">{result}
        </div>
      ) : null}
    </div>
  );
}

export default EvenOrodd;
