import { useState, useEffect } from "react";
import { ChangeEvent } from "react";

function AutoSaveInput() {
  const [text, setText] = useState("");
  
  interface InputChangeEvent {
    target: {
      value: string;
    };
  }

  const setInputData = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };
useEffect(() => {
    const savedText = localStorage.getItem("autosave");
    if (savedText) {
      setText(savedText);
   }},[]);  
   
  useEffect(() => {
    localStorage.setItem("autosave", text);
  }, [text]);
 

  const clearText = () => {
    setText("");
    localStorage.removeItem("autosave");
  };

  return (
    <div>
      <h1>Auto Save Input</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setInputData(e)}
        data-testid="input-field"

      />

      <button
        type="button"   
        data-testid="clear-btn"
        onClick={clearText}
      >
        Clear
      </button>
    </div>
  );
}

export default AutoSaveInput;
