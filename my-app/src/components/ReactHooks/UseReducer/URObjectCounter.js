import React, { useReducer } from "react";
import User from "../../ClassComponents/NameList/User";

const intitialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return intitialState;
    default:
      return state;
  }
};

function UseReducerCounter2() {
  const [count, dispatch] = useReducer(reducer, intitialState);
  return (
    <div>
      <div>Count - {count.firstCounter} </div>
      <div>SecondCount - {count.secondCounter} </div>
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
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter Two
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter Two
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerCounter2;
