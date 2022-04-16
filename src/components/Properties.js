import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";
import "../styles/Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

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

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties-page">
      <div>
        <SideBar />
      </div>
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
