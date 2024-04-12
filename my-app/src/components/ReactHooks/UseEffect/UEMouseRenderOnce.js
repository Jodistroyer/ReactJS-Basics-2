import React, { useEffect, useState } from "react";

function UseEffectOnlyOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logUEMousePosition = (e) => {
    console.log("UE Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logUEMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logUEMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default UseEffectOnlyOnce;
