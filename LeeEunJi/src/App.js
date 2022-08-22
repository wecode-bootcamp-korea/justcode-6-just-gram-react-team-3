import logo from "./logo.svg";
import "./App.scss";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("아오");
  const [name2, setName2] = useState("오아");
  let yourName = "바뀌냐구용";

  return (
    <div className="App">
      <div className="name">{name}</div>
      <div className="name2">{name2}</div>
      <div className="yourName">{yourName}</div>
      <button
        onClick={() => {
          setName("으아앙");
          yourName = "잘되나요";
        }}
      >
        {" "}
        이름 바꾸기{" "}
      </button>
    </div>
  );
}

export default App;
