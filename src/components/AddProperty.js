import React, { useState } from "react";
import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    type: "Flat",
    bedrooms: "",
    bathrooms: "",
    price: "",
    city: "Manchester",
    email: "",
  },
};

function AddProperty() {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <h2>Add Property</h2>
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Property tag line"
          />
        </label>
        <label htmlFor="type">
          Property type:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          No. of bedrooms:
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="Studio">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          No. of bathrooms:
          <select
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="price">
          Price (£):
          <input
            type="number"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="0"
          />
        </label>
        <label htmlFor="city">
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="email@email.com"
          />
        </label>
        <button className="submit-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProperty;
