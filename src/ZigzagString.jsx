import React, { useState } from "react";

const ZigzagString = () => {
  const [inputString, setInputString] = useState('')
  const [stringValue, setStringValue] = useState('')
  const handleClick = () => {
    console.log(inputString)
    //use regex
    const str = inputString.split(/,/);
    for(let i=1;i<str.length;i+=2){
      str[i] = str[i].split('').reverse().join('');
    }
    console.log(str)
    const result = str.join('');
    console.log(result)
    setStringValue(result)
    setInputString('')
  }
  return (
    <div>
      <input
        type="text"
        value={inputString}
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        onChange = {(e)=>{setInputString(e.target.value)}}
      />
      <button onClick={handleClick} data-testid="submit-button" style={{marginLeft: "10px"}}>
        Submit
      </button>
      <p data-testid="output-result">Output: {stringValue}</p>
    </div>
  );
};

export default ZigzagString;
