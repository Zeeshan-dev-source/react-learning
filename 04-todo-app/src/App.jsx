import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleAddOrUpdate() {
    if (text === "") 
      return;

    if (editIndex === null) {
      setTodos([...todos, text]);
    } else {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = text;
      setTodos(updatedTodos);
      setEditIndex(null);
    }
    setText("");
  }

  function deleteTodo(indexTodoDelete) {
    const newTodos = todos.filter((todo, index) => {
      return index !== indexTodoDelete;
    });

    setTodos(newTodos);
  }

  function editTodo(index) {
    setEditIndex(index);
    setText(todos[index]);
  }

  return (
    <div className="container">
      <h1>Simple Todo List</h1>
     <div className="input-row">
      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button onClick={handleAddOrUpdate}>
        {editIndex === null ? "Add" : "Update"}
      </button>
      </div>

      <hr />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button
              onClick={() => editTodo(index)}
              style={{ margin: "10px" }}
            >
              Edit
            </button>

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