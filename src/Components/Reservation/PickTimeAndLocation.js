import React, { useEffect, useState } from "react";

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
  const [availableBuses, setAvailableBuses] = useState([
    { location: "Nearest Location" }
  ]);
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
  };

  useEffect(() => {
    checkAvailableTime(buses);
  }, [0]);

  return (
    <div>
      <ul>
        {availableTimeState.map(time => {
          return (
            <li
              value={time}
              onClick={e => {
                checkLocationsWithBusesAtSelectedTime(e.target.value, buses);
              }}
            >
              {time}
            </li>
          );
        })}
      </ul>
      <ul>
        {availableBuses.map(bus => {
          return (
            <li
              onClick={e => {
                checkDestinationsOfSelectedBus(bus);
                props.selectedLocation(bus.location);
              }}
            >
              {bus.location}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
