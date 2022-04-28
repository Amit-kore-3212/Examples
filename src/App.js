import React, { useState } from "react";
import Count from "./Components/Count";
import { FilmNames } from "./Components/Films";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BackEndRequest from "./Components/BackEnd";
import GridComponent from "./Components/Grid";

function App() {
  return (
    <div>
      {/* //{" "}
      <BrowserRouter>
        //{" "}
        <Routes>
          // <Route path="/count" element={<Count />} />
          // <Route path="/login" element={<Login />} />
          // <Route path="/filmName" element={<FilmNames />} />
          // <Route path="/backend" element={<BackEndRequest />} />
          // <Route path="/" element={<GridComponent />} />
          //{" "}
        </Routes>
        //{" "}
      </BrowserRouter> */}
      <Count />
      {/* <Login />
      <GridComponent /> */}
      <BackEndRequest />
    </div>
  );
}

export default App;
//React hooks
//components
// components
//functional based components : React hooks : useState , useEffect , useRef , redux
//class based components : mentain local state // obselete // hard
//function based components
//3 : it should accept props
//updating a state from child to parent
//callback function
//HOC : component which accepts another component a a parameter and returns another component as a value

function add(m) {
  return (n) => {
    return m * n;
  };
}
console.log(add(7)(8));
