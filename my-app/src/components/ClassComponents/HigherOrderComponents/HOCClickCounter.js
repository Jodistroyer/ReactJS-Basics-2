import React, { Component } from "react";
import HOCCounter from "./HOCCounter";

class HOCClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default HOCCounter(HOCClickCounter);
