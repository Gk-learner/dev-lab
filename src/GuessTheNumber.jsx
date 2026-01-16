import React, { useState } from "react";

function GuessTheNumber() {
  const [num, setNum] = useState('')
  const [result, setResult] = useState('')
  const [count, setCount] = useState(1)
  const handleGuess = () => {
    const number = Math.round(Math.random() * 100  );
    // const number = 42; 
    setCount((prevCount) => prevCount + 1);
    if(number == num){
    setResult(`Congratulations! You guessed the number in ${count} attempts.`)
}
else if(num < number){
    setResult(`Too low! Try again.`)
}
else if(num > number && num < 100){
    setResult(`Too high! Try again.`)
}
else if(num >= 100){
    setResult("Please enter a number between 1 and 100.");
}
else{
    setResult("Please enter a number between 1 and 100.")
  };
  }
//   Function to reset the game
  const resetGame = () => {
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
      <div style={{display: "flex", flexDirection: "row", marginTop: "10px",gap: "10px"}}> 
         <button onClick={() => handleGuess()}>
        Check Guess</button>
      <button onClick={() => resetGame()}>Reset Game</button>
      </div>
     
{result}
    </div>
  );
}

export default GuessTheNumber;
