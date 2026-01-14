import React, { useContext, useRef, useState } from "react";
import HOCButton from "./HOCButton";
import MyContext from "./context";

export const Test3 = React.memo(() => { 
//   // for (i=0; i < arr.length; i++) {

// //     c = a + b;
// //     a = b;
// //     b = c;
// //     console.log(c);
// // }

// //dropdown
// <ul onClick={openItem}>
// {data.map((item) =>
//     <li key ={item} >{item}</li>

// )}

// </ul>
const {value, setvalue} = useContext(MyContext);
  const inputRef = useRef();
const[todo, setTodo]=useState([]);
const [todoList, setTodoList]= useState([]);

const handleChange = (e) => {
  try {
    setTodo(e.target.value);
  } catch (error) {
    console.log("Error in handleChange:", error);
    
  }
      
}
const setTodoListVal = () =>{
    if(todo==='') return;
    setTodoList([...todoList, todo])
    setTodo('');
    inputRef.current.focus();
}  
const deleteTodo = (index) => {
console.log(todoList, index)
    const newSet = todoList.filter((_, i) => i !== index);
setTodoList(newSet);
}
return (
    <>
    <h1>{value} </h1>
    <button onClick={() => setvalue("Updated Value")}>Update Value</button>
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={handleChange}   
        placeholder="Type here"
      />
      <HOCButton onClick = {setTodoListVal} buttonName={"Add Todo"}/>
      <HOCButton buttonName={"Delete Todo"}/>
      <ol style={{paddingLeft:"1px", textAlign:"left"}}>
        {todoList.map((item, index) => (
            <>
            <div  style={{display:"flex", alignItems:"center", gap:"103px"}}>
                <li key={index}>{item}
                    <span style={{marginLeft:"70px", cursor: "pointer"}}   onClick={()=>deleteTodo(index)}>x</span>
                </li>
            
            </div>
            </>
            
        ))}
        
      </ol>
    </>
  );
});
// A counter

// A todo list

// A search filter

// A modal

// A dropdown

// Conditional rendering

// List rendering

// Form with validation