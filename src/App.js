import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [7,8,9,4,5,6,1,2,3].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">{input}</div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        <button onClick={() => setInput("")} value="">
          clear
        </button>
      </div>
      <div className="operations subgrid">
        <button onClick={(e) => setInput(input + e.target.value)} value="/">
            {" "}
            ÷
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
