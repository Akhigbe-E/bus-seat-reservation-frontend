import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Authentication } from "./Components/Authentication/Authentication";
import { PickTimeAndLocation } from "./Components/Reservation/PickTimeAndLocation/PickTimeAndLocation";
import { Reservation } from "./Components/Reservation/Reservation";
import { PickDestination } from "./Components/Reservation/PickDestination";

function App() {
  const handleDepartureLocation = location => {
    console.log(location);
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
              selectedLocation={handleDepartureLocation}
            />
          )}
        />
        <Route path="/destination" component={PickDestination} />
        <Route path="/seat" component={Reservation} />
      </div>
    </Router>
  );
}

export default App;
