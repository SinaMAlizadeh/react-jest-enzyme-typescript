import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter/counter";
import AsyncAwait from "./Counter/AsyncAwait";
import ReactQuery from "./React-query/React-query";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <AsyncAwait /> */}
      <ReactQuery />
    </div>
  );
}

export default App;
