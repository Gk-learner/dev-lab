import React, { useState } from "react";

function GuessTheNumber() {
  const [num, setNum] = useState('')
  const [result, setResult] = useState('')
  const [count, setCount] = useState(1)
    const [numberToGuess, setNumberToGuess] = useState(() => Math.floor(Math.random() * 100) + 1);
  const handleGuess = () => {
    setCount((prevCount) => prevCount + 1);
   
    if (num > 100 || num <0 || isNaN(num)) {
      setResult("Please enter a number between 1 and 100.");
    }
    else if (numberToGuess == num) {
      setResult(`Congratulations! You guessed the number in ${count} attempts.`)
    }
    else if (num < numberToGuess) {
      setResult(`Too low! Try again.`)
    }
    else if (num > numberToGuess && num < 100) {
      setResult(`Too high! Try again.`)
    }
  }
  //   Function to reset the game
  const resetGame = () => {
    setNumberToGuess(Math.floor(Math.random() * 100) + 1)
    setNum('');
    setResult('');
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px", gap: "10px" }}>
        <button onClick={() => handleGuess()}>
          Check Guess</button>
        <button onClick={() => resetGame()}>Reset Game</button>
      </div>

      {result}
    </div>
  );
}

export default GuessTheNumber;
