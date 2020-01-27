import React, { useEffect, useState } from "react";
import "./PickTimeAndLocation.scss";

export const ListItem = props => {
  const [clicked, setclicked] = useState(false);
  const handleClicked = clicked => {
    setclicked(clicked);
    console.log("hey");
  };
  const { bus, handleSelectedBus } = props;
  return (
    <React.Fragment>
      <li
        className={
          clicked ? "is-clicked departure-list-item" : "departure-list-item"
        }
        onClick={e => {
          handleClicked(!clicked);
          handleSelectedBus(bus);
        }}
      >
        {bus.location}
      </li>
    </React.Fragment>
  );
};

export const TimeListItem = props => {
  //   const [clicked, setclicked] = useState(false);
  //   const handleClicked = clicked => {
  //     setclicked(clicked);
  //   };
  const { value, handleTimeSelected, buses, click } = props;
  let clicked;
  buses.forEach(bus => {
    if (bus.timeAtLocation === value) {
      clicked = bus.timeSelected;
    }
  });
  return (
    <React.Fragment>
      <li
        className={clicked ? "is-clicked time-list-item" : "time-list-item"}
        value={value}
        onClick={e => {
          click(value);
          handleTimeSelected(e.target.value, buses);
          //   handleClicked(!clicked);
        }}
      >
        {value} : 00
      </li>
    </React.Fragment>
  );
};
