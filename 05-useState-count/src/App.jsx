import { useState } from "react"; 
import "./index.css"; 
 
function App() { 
  const [count, setCount] = useState(0); 
  const [text, setText] = useState(""); 
  const [todos, setTodos] = useState([]); 
  const [editIndex, setEditIndex] = useState(null); 
 
  function handleTextChange(e) { 
    setText(e.target.value); 
  } 
  
  function handleClick() { 
    if (text === "") 
      return; 
 
    if (editIndex === null) { 
      setTodos([...todos, text]); 
       setCount(count + 1); 
    } else { 
      const updatedtodos = [...todos]; 
      updatedtodos[editIndex] = text; 
      setTodos(updatedtodos); 
      setEditIndex(null); 
    } 

    setText(""); 
  } 

  function deleteTodo(index) {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    setCount(count - 1);
  }
 
  function handleEdit(index) { 
    setEditIndex(index); 
    setText(todos[index]); 
  } 
 
  return ( 
    <div className="container"> 
      <h1>Listed Items {count} times</h1> 
      <div className="input-row"> 
        <input type="text" value={text} onChange={handleTextChange} /> 
      <button onClick={handleClick}> 
        {editIndex === null ? "Add me" : "Update"} 
      </button> 
       
      </div> 
 
      <h2>{text}</h2> 
      <ul> 
        {todos.map((todo, index) => ( 
          <li key={index}> 
            {todo} 
            <button onClick={() => handleEdit(index)} style={{ marginLeft: "10px" }}>Edit</button>
            
            <button
              onClick={() => deleteTodo(index)}
              style={{ margin: "10px" }}
            >
              Delete
            </button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default App;