import React, { useState } from "react";
import "./SelectSeat.css";

export const SelectSeat = props => {
  const [selected, setSelected] = useState(false);
  const selectSeat = () => {
    setSelected(true);
  };
  return (
    <div className="select-seat">
      <div className="select-seat-header">
        <h2>College of Science and Technology</h2>
        <p>Click on the seat to book</p>
      </div>
      <div className="bus">
        <div className="bus-seat">
          <button
            value="seat1"
            className={selected ? "selected-seat" : "seat-dormant"}
            onClick={() => {
              selectSeat();
            }}
          >
            SEAT
          </button>
          <button value="seat1">SEAT</button>
          <button value="seat1">SEAT</button>
        </div>
      </div>
    </div>
  );
};
