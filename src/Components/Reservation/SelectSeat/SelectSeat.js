import React, { useState } from "react";
import "./SelectSeat.scss";

export const SelectSeat = props => {
  const [seats, setSeats] = useState([
    { seatNo: 0, available: true },
    { seatNo: 1, available: true },
    { seatNo: 2, available: true },
    { seatNo: 3, available: true },
    { seatNo: 4, available: true },
    { seatNo: 5, available: true },
    { seatNo: 6, available: true },
    { seatNo: 7, available: true },
    { seatNo: 8, available: true },
    { seatNo: 9, available: true },
    { seatNo: 10, available: true }
  ]);

  const firstRow = seats => {
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
      secondRow.push(seats[i]);
    }
    return secondRow;
  };
  const thirdRow = () => {
    const thirdRow = [];
    for (let i = 7; i < 11; i++) {
      thirdRow.push(seats[i]);
    }
    return thirdRow;
  };

  const handleSeatClick = seatNumber => {
    let seatsCopy = seats;
    for (let i = 0; i < seats.length; i++) {
      seatsCopy[i].available = true;
      setSeats([...seatsCopy]);
      if (seats[i].seatNo === seatNumber) {
        seatsCopy[i].available = false;
        setSeats([...seatsCopy]);
      }
    }
  };
  return (
    <div className="select-seat">
      <div className="select-seat-header">
        <h2>College of Science and Technology</h2>
        <p>Click on the seat to book</p>
      </div>
      <div className="bus">
        <div className="first-row">
          {firstRow(seats).map(({ seatNo, available }) => {
            let i = 0;
            let customClasses = "seat";
            return (
              <div className="seat">
                <button
                  value={`seat${i++}`}
                  className={
                    available
                      ? `seat-dormant ${customClasses}`
                      : `selected-seat ${customClasses}`
                  }
                  onClick={e => {
                    e.preventDefault();
                    handleSeatClick(seatNo);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
        <div className="second-row">
          {secondRow(seats).map(({ seatNo, available }) => {
            let i = 0;
            let customClasses = "seat";
            return (
              <div className="seat">
                <button
                  value={`seat${i++}`}
                  className={
                    available
                      ? `seat-dormant ${customClasses}`
                      : `selected-seat ${customClasses}`
                  }
                  onClick={e => {
                    e.preventDefault();
                    handleSeatClick(seatNo);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
        <div className="third-row">
          {thirdRow(seats).map(({ seatNo, available }) => {
            let i = 0;
            let customClasses = "seat";
            return (
              <div className="seat">
                <button
                  value={`seat${i++}`}
                  className={
                    available
                      ? `seat-dormant ${customClasses}`
                      : `selected-seat ${customClasses}`
                  }
                  onClick={e => {
                    e.preventDefault();
                    handleSeatClick(seatNo);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="tags">
        <p style={{ backgroundColor: "#454545" }}>Reserved</p>
        <p style={{ backgroundColor: "#46a530" }}>Empty</p>
        <p style={{ backgroundColor: "rgb(231, 47, 47)" }}>Taken</p>
      </div>
      <div className="proceed-button-container">
        {seats.some(({ available }) => available === false) ? (
          <button className="proceed-button">Get Ticket</button>
        ) : (
          undefined
        )}
      </div>
    </div>
  );
};
