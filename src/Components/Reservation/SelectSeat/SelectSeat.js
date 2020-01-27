import React, { useState } from "react";
import "./SelectSeat.scss";

export const SelectSeat = props => {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const [seats, setSeats] = useState([
    // { seatOne: "available" },
    // { seatTwo: "available" },
    // { seatThree: "available" },
    // { seatFour: "available" },
    // { seaFive: "available" },
    // { seatSix: "available" },
    // { seatSeven: "available" },
    // { seatEight: "available" },
    // { seatNine: "available" },
    // { seatTen: "available" },
    // { seatEleven: "available" },
    // { seatEleven: "available" }
    { seatNo: 1, available: true },
    { seatNo: 2, available: true },
    { seatNo: 3, available: true },
    { seatNo: 4, available: true },
    { seatNo: 5, available: true },
    { seatNo: 6, available: true },
    { seatNo: 7, available: true },
    { seatNo: 8, available: true },
    { seatNo: 9, available: true },
    { seatNo: 10, available: true },
    { seatNo: 11, available: true }
  ]);
  const selectSeat = () => {
    setSelected(!selected);
  };
  const selectSeat2 = () => {
    setSelected2(!selected);
  };
  const selectSeat3 = () => {
    setSelected3(!selected);
  };
  const firstRow = () => {
    const firstRow = [];
    for (let i = 0; i < 3; i++) {
      firstRow.push(seats[i]);
    }
    console.log(firstRow);
    return firstRow;
  };
  const secondRow = () => {
    const secondRow = [];
    for (let i = 3; i < 7; i++) {
      firstRow.push(seats[i]);
    }
    return secondRow;
  };
  const thirdRow = () => {
    const thirdRow = [];
    for (let i = 7; i < 12; i++) {
      thirdRow.push(seats[i]);
    }
    return thirdRow;
  };
  return (
    <div className="select-seat">
      <div className="select-seat-header">
        <h2>College of Science and Technology</h2>
        <p>Click on the seat to book</p>
      </div>
      <div className="bus">
        {firstRow().map(({ seatNo, available }) => (
          <div>
            <button
              value="seat1"
              className={available ? "seat-dormant" : "selected-seat"}
              onClick={() => {
                setSeats([...seats, { seatNo: seatNo, available: false }]);
              }}
            ></button>
          </div>
        ))}

        <div className="bus-seat">
          <button
            value="seat1"
            className={selected ? "selected-seat" : "seat-dormant"}
            onClick={() => {
              selectSeat();
            }}
          ></button>
          <div className="bus-seat">
            <button
              value="seat1"
              className={selected2 ? "selected-seat" : "seat-dormant"}
              onClick={() => {
                selectSeat2();
              }}
            ></button>
          </div>
          <div className="bus-seat">
            <button
              value="seat1"
              className={selected3 ? "selected-seat" : "seat-dormant"}
              onClick={() => {
                selectSeat3();
              }}
            ></button>
          </div>
          {/* <button value="seat1">SEAT</button>
          <button value="seat1">SEAT</button> */}
        </div>
      </div>
    </div>
  );
};
