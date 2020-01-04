import React from "react";
import "./Ticket.scss";

export const Ticket = props => {
  return (
    <div className="ticket">
      <div className="ticket-main animated slideOutUp delay-1s">
        <p className="question-head">Booking Pass</p>
        <div className="direction-location">
          <p className="location">CST</p>
          <img
            src={require("../../resources/images/direction.png")}
            alt="direction"
            className="direction"
          />
          <p className="location">CST</p>
        </div>
        <div className="vehicle-seat"></div>
        <div className="time"></div>
        <div className="passenger-barcode"></div>
      </div>
    </div>
  );
};
