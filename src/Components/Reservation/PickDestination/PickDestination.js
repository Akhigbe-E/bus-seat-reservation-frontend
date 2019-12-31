import React, { useEffect, useState } from "react";
import "./PickDestination.css";

export const PickDestination = ({ busDetails }) => {
  const { locationSelected, busDestinations } = busDetails;
  const [availableDestinations, setAvailableDestinations] = useState([]);
  console.log(busDetails);
  useEffect(() => {
    priceGenerator(locationSelected, busDestinations);
  }, [busDestinations]);

  const priceGenerator = (location, destinations) => {
    const avDistances = [];
    const [locationCluster1, locationCluster2] = [
      ["Hall", "HC", "CLR", "CST", "CDS"],
      ["CAF", "ALDC", "COE"]
    ];
    if (!destinations) return;
    destinations.forEach(destination => {
      if (
        locationCluster1.includes(location) &&
        locationCluster1.includes(destination)
      ) {
        avDistances.push({ destination, price: 50 });
        return;
      }
      if (
        locationCluster2.includes(location) &&
        locationCluster2.includes(destination)
      ) {
        avDistances.push({ destination, price: 50 });
        return;
      }
      avDistances.push({ destination, price: 100 });
      return;
    });
    setAvailableDestinations(avDistances);
  };
  return (
    <div>
      <div className="departure-f">
        <div className="question-head-f">Departure from</div>
        <div className="departure-list-f">
          <p>{locationSelected}</p>
        </div>
      </div>
      <div className="destination-selection">
        <p className="destination-category">Available Destinations</p>
        <ul>
          {availableDestinations.map(({ destination, price }) => (
            <li key={destination}>{destination}</li>
          ))}
        </ul>
        <p className="destination-category">Cheapest</p>
        <ul>
          {availableDestinations.map(({ destination, price }) => {
            if (price < 100) {
              console.log({ destination, price });
              return <li key={destination}>{destination}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};
