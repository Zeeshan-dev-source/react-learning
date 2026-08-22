import { useState } from "react";
import "./CharacterCounter.css";

function App() {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function clearText() {
    setText("");
  }

  return (
    <div className="container">
      <h1>Character Counter</h1>

      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleTextChange} maxLength={100}
      ></textarea>

      <p>
        Characters: <strong>{text.length}</strong>
      </p>
      
      <p>
        Words: <strong>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</strong>
      </p>

      <button onClick={clearText}>Clear</button>
    </div>
  );
}

export default App;