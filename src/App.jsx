import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (number === "") {
      setResult("Please enter a number");
      return;
    }

    let sum = 0;
    let digits = number.length;

    for (let i = 0; i < digits; i++) {
      sum += Math.pow(Number(number[i]), digits);
    }

    if (sum === Number(number)) {
      setResult(`${number} is an Armstrong Number ✅`);
    } else {
      setResult(`${number} is Not an Armstrong Number ❌`);
    }
  };

  const clearFields = () => {
    setNumber("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Armstrong Number Checker</h1>

        <input
          type="number"
          placeholder="Enter a Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <div className="btn-group">
          <button onClick={checkArmstrong}>Check</button>
          <button onClick={clearFields}>Clear</button>
        </div>

        {result && <h2>{result}</h2>}
      </div>
    </div>
  );
}

export default App;