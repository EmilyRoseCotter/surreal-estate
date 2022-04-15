import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

function PropertyCard({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) {
  return (
    <div className="property-card">
      <div className="property-card-image">
        <img
          className="house-image"
          src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
          alt="surreal estate logo"
        />
      </div>
      <div className="property-card-title property-card-item">{title}</div>
      <div className="property-card-type-city property-card-item">
        {type} - {city}
      </div>
      <div className="property-card-bathrooms property-card-item">
        Bathrooms: {bathrooms}
      </div>
      <div
        className="property-card-bedrooms property-card-item"
        data-testid="property-card_bedrooms"
      >
        Bedrooms: {bedrooms}
      </div>
      <div className="property-card-price property-card-item">{price}</div>
      <div className="property-card-email property-card-item">
        <a className="link-text" href={`mailto:${email}?subject=${title}`}>
          Email
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
