import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter/counter";
import AsyncAwait from "./Counter/AsyncAwait";
import ReactQuery from "./React-query/React-query";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { ReactQueryDevtools } from "react-query/devtools";
import StylesComponetns from "./StyleComponents/Styles-componetns";

export type PageType = "planets" | "people";

function App() {
  const [page, setPage] = useState<PageType>("planets");

  return (
    <>
      <div className="App">
        <StylesComponetns />
        {/* <h1>start wars info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div> */}
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default App;
