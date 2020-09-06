import React from "react";
import "./App.css";
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UseState from "./components/useState";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import UseMemo from "./components/useMemo";
import UseCallback from "./components/useCallback";
import UseContext from "./components/useContext";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      < Navbar />
      <div className="container">
        <Switch>
          {/* <Route component={Home} path="/" exact /> */}
          <Route component={UseState} path="/useState" />
          <Route component={UseEffect} path="/useEffect" />
          <Route component={UseRef} path="/useRef" />
          <Route component={UseMemo} path="/useMemo" />
          <Route component={UseCallback} path="/useCallback" />
          <Route component={UseContext} path="/useContext" />
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
