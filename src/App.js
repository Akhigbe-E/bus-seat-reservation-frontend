import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Authentication } from "./Components/Authentication/Authentication";
import { PickTimeAndLocation } from "./Components/Reservation/PickTimeAndLocation/PickTimeAndLocation";
import { Reservation } from "./Components/Reservation/Reservation";
import { PickDestination } from "./Components/Reservation/PickDestination/PickDestination";

function App() {
  const [busDetails, setBusDetails] = useState("...");
  const handleDepartureLocation = ({ location, destinations }) => {
    setBusDetails({
      locationSelected: location,
      busDestinations: destinations
    });
  };
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Authentication} />
        <Route
          path="/book"
          render={props => (
            <PickTimeAndLocation
              {...props}
              selectedBus={handleDepartureLocation}
            />
          )}
        />
        <Route
          path="/destination"
          render={props => (
            <PickDestination {...props} busDetails={busDetails} />
          )}
        />
        <Route path="/seat" component={Reservation} />
      </div>
    </Router>
  );
}

export default App;
