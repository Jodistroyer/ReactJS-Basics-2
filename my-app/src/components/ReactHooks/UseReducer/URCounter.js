import React, { useReducer } from "react";
import User from "../../ClassComponents/NameList/User";

const intitialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intitialState;
    default:
      return state;
  }
};

function URCounter() {
  const [count, dispatch] = useReducer(reducer, intitialState);
  return (
    <div>
      <div>Count - {count} </div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default URCounter;
