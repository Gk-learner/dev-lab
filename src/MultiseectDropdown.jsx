import React,{useState} from "react";
// import "./styles.css";

function MultiSelectDropdown() {
  const [inputs, setInputs] = useState([])
const[isChecked, setIsChecked] = useState(false)
  const handleClick = (e) => {
    const item = e.target.value;
const currindex = inputs.indexOf(item);
    if (currindex > -1) {
      const newInputs = inputs.filter((input) => input !== item);
      setInputs(newInputs);
    } else {
      setInputs([...inputs, item]);
    }
  }
    const handleReset = () => {
    setInputs([]);
    setIsChecked(false);
    }
  return (
    <div className="dropdown-container">
      <h2 className="dropdown-title">Multiselect Dropdown Menu</h2>
      <label className="dropdown-label">Select Options:</label>
      <div className="dropdown-wrapper">
        <button className="dropdown-toggle">
          <span className="dropdown-icon">
          </span>
          <span className="dropdown-button-label">{inputs.length > 0 ? `${inputs.length} selected` : "Choose Options"}</span>
        </button>
        <ul className="dropdown-menu">
        
          <li className="dropdown-reset" style={{listStyleType: "none", cursor: "pointer"}} onClick={handleReset}>Reset Selection</li>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
          (<li 
            key={index} 
            style={{listStyleType: "none"}}
            className="dropdown-option">
            <input
              type="checkbox"
              name="option"
              checked={inputs.includes(String(item))}
              value={item}
              onChange={handleClick} />
            <span className="option-label">Option {item}</span>
          </li>))}
          
        </ul>
      </div>

      <button className="submit-button">Submit</button>
      <button className="reset-button" onClick={handleReset}>Reset</button>
      <div className="selected-options">
        <h3>Selected Options:</h3>  
        {inputs.length > 0 ? (
          <ul>
            {inputs.map((input, index) => (
                <li key={index} style={{listStyleType: "none"}}>{input}</li>
            ))}
            </ul>
        ) : (
            <p>No options selected.</p>
        )}
      </div>
      <div className="result-area"></div>
    </div>
  );
}

export default MultiSelectDropdown;
