import React, { useState } from "react";
import "./styles.css";

export default function LeapYear() {

  const [initialValue, setInitialValue] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleCheck = () => {
    const year = Number(initialValue.trim());

    // 1. Empty input
    if (!initialValue.trim()) {
      setResult('');
      setError('Please enter a year');
      return;
    }

    // 2. Invalid number
    if (isNaN(year)) {
      setResult('');
      setError('Please enter a valid year');
      return;
    }

    // 3. Leap year logic
    setError('');
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      setResult(`${year} is a Leap Year`);
    } else {
      setResult(`${year} is not a Leap Year`);
    }
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>

      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        value={initialValue}
        data-testid="year-input"
        onChange={(e) => setInitialValue(e.target.value)}
      />

      <button
        data-testid="check-btn"
        onClick={handleCheck}>
        Check
      </button>

      {result && <div data-testid="result">{result}</div>}
      {error && <div data-testid="error-msg">{error}</div>}
    </div>
  );
}
