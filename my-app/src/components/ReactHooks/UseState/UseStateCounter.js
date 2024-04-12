import { useState } from "react";
import React from "react";
import stylesheet from "./UseStateCounter.css";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  const reset = () => {
    setCount(0);
  };

  function increaseCount() {
    setCount(count + 1);
  }

  function reduceCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <div className="counter">{count}</div>
      <div>
        <button className="counter" onClick={increaseCount}>
          Increase
        </button>
      </div>
      <div>
        <button className="counter" onClick={reset}>
          Reset Count
        </button>
      </div>
      <div>
        <button className="counter" onClick={reduceCount}>
          Reduce -
        </button>
      </div>
    </div>
  );
}

export default UseStateCounter;
