import React,{useRef} from "react";

function TodoList() {
  const [todoItem, setTodoItem] = React.useState('')
  const [listItem, setListItem] = React.useState([])
  const inputRef = useRef();
//   const [isChecked, setIsChecked] = React.useState(false);
//    const [completed, setCompleted] = React.useState("true");
  const handleChange = (e) => {
    const enteredInput = e.target.value;
  setTodoItem(enteredInput.trim())
  }
  const handleClick = () => {
    if(todoItem===''){
      alert('Please enter a todo item');
      return;
    }
    setListItem((prev) => [...prev, 
        {text: todoItem, completed: false}])
    setTodoItem('')
    inputRef.current.focus();
  
  }
  const handleDelete = (id) => {
  setListItem((prev)=>prev.filter((item, index)=>index!==id))
}
const handleComplete = ( id) => {
    setListItem((prev) => prev.map((item, index) => index === id ? { ...item, completed: !item.completed } : item));
   
    }
    return (
        <div>
        <h2>To Do List</h2>
        <input
          ref={inputRef}
          type="text"
          value={todoItem}
          onChange={handleChange}
          placeholder="Enter todo"
        ></input>
        <button onClick={handleClick}>Add</button>
        <div>
          <ul>
            {listItem.map((item, id) => (
              <li key={id}>
                <input 
                checked={item.completed}
                onChange={()=>{handleComplete(id)}}
                type="checkbox">
                </input>
                <div style={{ textDecoration: item.completed ? 'line-through' : 'none'  }}>
                    {item.text}
                </div>
                    
                <button
                    onClick={() => { handleDelete(id) }}>Delete</button>
              </li>
          ))}
          
        </ul>
      </div>
        </div>
    );
}

export default TodoList;