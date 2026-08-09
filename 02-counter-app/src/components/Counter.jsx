import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h2>Counter App</h2>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+1</button>

      <button onClick={() => setCount(count - 1)}>-1</button>

      <button onClick={() => setCount(count + 5)}>+5</button>

      <button onClick={() => setCount(count - 5)}>-5</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;