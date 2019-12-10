import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Authentication } from "./Components/Authentication/Authentication";
import { PickTimeAndLocation } from "./Components/Reservation/PickTimeAndLocation";
import { Reservation } from "./Components/Reservation/Reservation";

function App() {
  return (
    <div className="App">
      <Authentication />
      {/* <Reservation /> */}
    </div>
  );
}

export default App;
