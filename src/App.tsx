import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter/counter";
import AsyncAwait from "./Counter/AsyncAwait";

function App() {
  return (
    <div className="App">
      <Counter />
      <AsyncAwait />
    </div>
  );
}

export default App;
