import React, { useState } from "react";
import UEMouseRenderOnce from "./UEMouseRenderOnce";

function UEMouseContainerCleanup() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UEMouseRenderOnce />}
    </div>
  );
}

export default UEMouseContainerCleanup;
