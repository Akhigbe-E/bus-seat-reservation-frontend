import React, { useEffect, useState } from "react";
import "./PickTimeAndLocation.scss";

export const PickTimeAndLocation = props => {
  const buses = [
    {
      name: "Hilx bus",
      timeAtLocation: 7,
      location: "CST",
      destinations: ["CAF", "CDS", "COE"]
    },
    {
      name: "Hilx bus",
      timeAtLocation: 7,
      location: "CDS",
      destinations: ["CAF", "CDS", "COE"]
    },
    {
      name: "Mazda bus",
      timeAtLocation: 9,
      location: "CDS",
      destinations: ["CAF", "CST", "COE"]
    },
    {
      name: "Tesla bus",
      timeAtLocation: 12,
      location: "COE",
      destinations: ["CAF", "CDS", "COE"]
    }
  ];
  const [availableTimeState, setAvailableTimeState] = useState([]);
  const [active, setActive] = useState(false);
  const [availableBuses, setAvailableBuses] = useState([{ location: "..." }]);
  //select a time, select locations available in that time, select destinations available for that location in that time, select seat

  //accept buses as a parameter
  const checkAvailableTime = buses => {
    const timeAvailable = [];
    let timeToDisplay = [];

    buses.forEach(({ timeAtLocation }) => {
      timeAvailable.push(timeAtLocation);
      timeToDisplay = [...new Set(timeAvailable)];
    });
    setAvailableTimeState(timeToDisplay);
  };

  const checkLocationsWithBusesAtSelectedTime = (time, buses) => {
    const availableBuses = [];
    buses.forEach(bus => {
      if (bus.timeAtLocation === time) {
        availableBuses.push(bus);
      }
    });
    setAvailableBuses(availableBuses);
  };

  const checkDestinationsOfSelectedBus = bus => {
    props.selectedBus(bus);
    setActive(true);
    setTimeout(() => {
      props.history.push("/destination");
    }, 2000);
  };

  useEffect(() => {
    checkAvailableTime(buses);
  }, [0]);

  return (
    <div
      className={
        active ? "time-location animated slideOutUp delay-1s" : "time-location"
      }
    >
      <p className="question-head">What time should the bus leave?</p>
      <div className="time">
        {/* Return all the available time */}
        <ul className="time-list">
          {availableTimeState.map(time => (
            <li
              className="time-list-item"
              // className={active ? "active" : ...""}
              value={time}
              onClick={e => {
                checkLocationsWithBusesAtSelectedTime(e.target.value, buses);
              }}
            >
              {time} : 00
            </li>
          ))}
        </ul>
      </div>

      {/* Return the locations that have buses at the selected time */}
      <div className="departure">
        <div className="question-head">Departure from</div>
        <ul className="departure-list">
          {availableBuses.map(bus => {
            return (
              <li
                className="departure-list-item"
                onClick={e => {
                  checkDestinationsOfSelectedBus(bus);
                }}
              >
                {bus.location}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
