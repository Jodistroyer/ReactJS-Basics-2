import React, { useReducer } from "react";
import User from "../../ClassComponents/NameList/User";

const intitialState = {
  firstCounter: 0,
  secondCounter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };

    case "reset":
      return intitialState;
    default:
      return state;
  }
};

function URCounter2() {
  const [count, dispatch] = useReducer(reducer, intitialState);
  return (
    <div>
      <div>Count - {count.firstCounter} </div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default URCounter2;
