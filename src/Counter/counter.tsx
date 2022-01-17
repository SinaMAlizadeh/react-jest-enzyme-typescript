import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>Learn React</h1>
      <button id="increament-btn" onClick={() => setCounter(counter + 1)}>
        increament
      </button>
      <button id="decreament-btn" onClick={() => setCounter(counter - 1)}>
        decreament
      </button>
      <div id="counter-value">{counter}</div>
    </div>
  );
}

export default Counter;
