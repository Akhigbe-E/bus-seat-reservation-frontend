import React, { useEffect, useState } from "react";

export const PickDestination = ({ locationSelected, busDestinations }) => {
  const [availableDestinations, setAvailableDestinations] = useState([]);

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
      <h3>Cheapest</h3>
      <ul>
        {availableDestinations.map(({ destination, price }) => {
          if (price < 100) {
            console.log({ destination, price });
            return <li key={destination}>{destination}</li>;
          }
        })}
      </ul>
      <h3>Available Destinations</h3>
      <ul>
        {availableDestinations.map(({ destination, price }) => (
          <li key={destination}>{destination}</li>
        ))}
      </ul>
    </div>
  );
};
