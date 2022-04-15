import React from "react";
import PropertyCard from "./PropertyCard";

function Properties() {
  return (
    <div>
      <h2>Properties</h2>
      <PropertyCard
        title="2 bed cottage"
        type="Cottage"
        bedrooms="2"
        bathrooms="2"
        city="Manchester"
        price="£100000"
        email="estate@estate.com"
      />
    </div>
  );
}

export default Properties;
