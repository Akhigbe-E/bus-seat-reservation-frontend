import React, { useEffect, useState } from "react";
import "./PickDestination.scss";

export const PickDestination = props => {
  const { busDetails } = props;
  console.log(busDetails);
  const { locationSelected, busDestinations } = busDetails;
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

  const handleDepartureClick = () => {
    props.history.push("/book");
  };
  const handleDestinationClick = destination => {
    let proceed = window.confirm(`Your Selected destination is ${destination}`);
    if (proceed) props.history.push("/seat");
  };
  return (
    <div>
      <div className="departure-f">
        <div className="question-head-f">Departure from</div>
        <div className="departure-list-f">
          <p onClick={handleDepartureClick}>{locationSelected}</p>
        </div>
      </div>
      <div className="destination-selection">
        {/* <div className="animated slideInUp"> */}
        <p className="destination-category animated flipInX">
          AVAILABLE DESTINATIONS
        </p>
        <ul className="destination-category-list animated slideInUp">
          {availableDestinations.map(({ destination, price }) => (
            <div
              className="destination-category-list-item"
              onClick={e => {
                handleDestinationClick(destination);
              }}
            >
              <li key={destination}>{destination}</li>
            </div>
          ))}
        </ul>
        {/* </div> */}
        <div className="">
          <p className="destination-category animated flipInX">CHEAPEST</p>
          <ul className="destination-category-list animated slideInUp">
            {availableDestinations.map(({ destination, price }) => {
              if (price < 100) {
                return (
                  <div
                    className="destination-category-list-item"
                    onClick={e => {
                      console.log("be");
                      handleDestinationClick(destination);
                    }}
                  >
                    <li key={destination}>{destination}</li>
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
