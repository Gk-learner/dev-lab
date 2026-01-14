import React, { useState } from "react";
// import './styles.css'
function ChipsInput() {
  const [myValue, setMyvalue] = useState("")
  const [showValue, setShowValue] = useState([])

  const handleInputChange = (event) => {
    setMyvalue(event.target.value)
  }
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      setShowValue([...showValue, myValue])
      setMyvalue("")
    }

  }
  const handleCancel = (e) => {
    console.log(e)
   
    const filteredChips = showValue.filter((_, index) => index !== e);
    setShowValue(filteredChips);

  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        value={myValue}
        id="textInput"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={handleInputChange}
        onKeyPress={handleKeypress}
      />
      {showValue.map((val, index) => (
       <div key={index}> 
            <span  className="chip-tag">{val} </span>
            <div  style={{ cursor: "pointer" }} onClick={() => handleCancel(index)}> x</div>
        </div>
      ))}

    </div>
  );
}

export default ChipsInput;