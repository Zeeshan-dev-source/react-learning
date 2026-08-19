import { useState } from "react";
import "./ColorChanger.css";

function ColorChanger() {
    const colors = ['red', 'blue', 'orange', 'green', 'purple', 'pink', 'teal', 'yellow', 'brown', 'gray', 'black', 'darkblue', 'skyblue', 'Lightgreen']
    const [color, setColor] = useState("navy");

  function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <h1>Color Changer</h1>
      <p>Current color: {color}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChanger;