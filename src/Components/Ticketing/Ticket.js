import React from "react";
import "./Ticket.scss";

export const Ticket = props => {
  return (
    <div className="ticket">
      <div className="ticket-main animated slideInUp delay-1s">
        <p
          className="question-head"
          style={{ textAlign: "left", paddingBottom: "10px" }}
        >
          Booking Pass
        </p>
        <div className="direction-location">
          <p className="location">CST</p>
          <img
            src={require("../../resources/images/direction.png")}
            alt="direction"
            className="direction"
          />
          <p className="location">CST</p>
        </div>
        <div className="vehicle-seat">
          <div className="ticket-section">
            <p className="ticket-section-head">VEHICLE</p>
            <p className="ticket-section-body">Hilus Bus</p>
          </div>
          <div className="ticket-section two">
            <p className="ticket-section-head">SEAT</p>
            <p className="ticket-section-body">5</p>
          </div>
        </div>
        <div className="time">
          <div className="ticket-section">
            <p className="ticket-section-head">BOARDING</p>
            <p className="ticket-section-body">2:30 PM</p>
          </div>
          <div className="ticket-section two">
            <p className="ticket-section-head">TIME LEFT</p>
            <p className="ticket-section-body">1:50:30</p>
          </div>
        </div>
        <div className="passenger-barcode"></div>
      </div>
    </div>
  );
};
