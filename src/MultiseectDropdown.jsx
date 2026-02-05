import React,{useState} from "react";
// import "./styles.css";

function MultiSelectDropdown() {
  const [inputs, setInputs] = useState([])

  const handleClick = (e) => {
    console.log(e.target.value)
    const item = e.target.value;
const currindex = inputs.indexOf(item);
    if (currindex > -1) {
      const newInputs = inputs.filter((input) => input !== item);
      setInputs(newInputs);
    } else {
      setInputs([...inputs, item]);
    }

    // setInputs(prev => [...prev, item])
  }
  return (
    <div className="dropdown-container">
      <h2 className="dropdown-title">Multiselect Dropdown Menu</h2>
      <label className="dropdown-label">Select Options:</label>
      <div className="dropdown-wrapper">
        <button className="dropdown-toggle">
          <span className="dropdown-icon">
          </span>
          <span className="dropdown-button-label">Choose Options</span>
        </button>
        <ul className="dropdown-menu">
        
          <li className="dropdown-reset">Reset Selection</li>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
          (<li key={index} className="dropdown-option">
            <input
              type="checkbox"
              name="option"
              value={item}
              onChange={handleClick} />
            <span className="option-label">Option {item}</span>
          </li>))}
          
        </ul>
      </div>

      <button className="submit-button">Submit{inputs}</button>
      <div className="result-area"></div>
    </div>
  );
}

export default MultiSelectDropdown;
