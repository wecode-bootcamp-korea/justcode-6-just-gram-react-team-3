import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color }}>Parent Component</h1>
      <Child
        titleColor={color}
        contentColor={color}
        changeColor={changeColor}
      />
    </div>
  );
}

export default Parent;
