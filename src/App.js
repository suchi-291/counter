import React, { useState } from "react";
function App() {
  let [count, updateCount] = useState(0);
  return (
    <>
      <center>
        <h1>Counter</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <button
            style={{ background: "#8b0a1a", color: "#ffffff" }}
            onClick={() => updateCount(count > 0 ? --count : count * 0)}
          >
            -
          </button>
          <p>{count}</p>
          <button
            style={{ background: "#007fff", color: "#ffffff" }}
            onClick={() => updateCount(++count)}
          >
            +
          </button>
        </div>
      </center>
    </>
  );
}

export default App;
