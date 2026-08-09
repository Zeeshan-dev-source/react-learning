import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);

  function handleClick() {
    setAge((prevAge) => prevAge + 5);
    setAge((prevAge) => prevAge + 5);
    setAge((prevAge) => prevAge + 5);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Age Counter</h1>

        <p className="age">
          Age: <span>{age}</span>
        </p>

        <button onClick={handleClick}>
          Increment Age
        </button>

        <p className="info">
          Each click increases the age by 15.
        </p>
      </div>
    </div>
  );
}

export default App;