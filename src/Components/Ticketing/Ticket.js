import React from "react";
import "./Ticket.scss";

export const Ticket = props => {
  return (
    <div className="ticket">
      <div className="wrapper animated slideInUp delay-1s">
        <div className="ticket-main animated slideInUp">
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
              <p className="ticket-section-head first">VEHICLE</p>
              <p className="ticket-section-body">Hilus Bus</p>
            </div>
            <div className="ticket-section two">
              <p className="ticket-section-head first">SEAT</p>
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
          <div className="passenger-barcode">
            <div className="passenger-barcode-section-first">
              <p className="ticket-section-head">PASSENGER</p>
              <p className="ticket-section-body">John Doe</p>
            </div>
            <div className="passenger-barcode-section-second bar-code">
              <img src={require("../../resources/images/barCodeImg.png")} />
            </div>
          </div>
        </div>
        <div className="ticket-secondary  animated slideInUp delay-2s">
          <p>Show the QR code above to the bus driver</p>
          <button className="ticket-button">DONE</button>
        </div>
      </div>
    </div>
  );
};
