import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please try again later.",
        })
      );
  }, []);

  return (
    <div className="properties-page">
      <div className="alert">
        <Alert message={alert.message} success={false} />
      </div>
      <div>
        <div className="property-cards">
          {properties.map((property) => (
            <div className="column">
              <PropertyCard key={property._id} {...property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Properties;
