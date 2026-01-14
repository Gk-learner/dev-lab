import { useEffect } from 'react';
import { Test1 } from './test1.jsx';
export const Test2 =({test3Data})=> {
  console.log('test3Data:',test3Data);
    const a = 10;
    const handleClick = (e) => {
      console.log('hi',e.target.tagName);
      const tag = e.target.tagName;
      if(tag === "LI"){
        alert(e.target.innerText);
      }      
    }
    useEffect(() => {
      console.log('test3Data in test2:',test3Data);
    },[test3Data])
  return (
    <><div>test2</div>
    <Test1 a = {a} />
    <div id = "dd" onClick={handleClick} style={{marginTop:"20px"}}>
      <ol>
        <li>Step 1: Create a React component named Test2.
</li>

        <li>Step 2: Inside Test2, define a constant variable a and set its value to 10.
</li>
        <li>Step 3: Render a div element displaying the text "test2".
</li>
        <li>Step 4: Include the Test1 component within Test2 and pass the variable a as a prop to Test1.

        </li>
      </ol>
    </div>
    </>
  )
}

