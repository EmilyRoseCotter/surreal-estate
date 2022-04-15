import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "3 bed cottage",
    type: "Cottage",
    bedrooms: 3,
    bathrooms: 2,
    city: "Manchester",
    price: 100000,
    email: "estate@estate.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        city={validProps.city}
        price={validProps.price}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct values for props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        city={validProps.city}
        price={validProps.price}
        email={validProps.email}
      />
    );

    expect(getByText("3 bed cottage")).toHaveClass("property-card-title");
    expect(getByText("Cottage - Manchester")).toHaveClass(
      "property-card-type-city"
    );
    expect(getByText("Bathrooms: 2")).toHaveClass("property-card-bathrooms");
    expect(getByText("Bedrooms: 3")).toHaveClass("property-card-bedrooms");
    expect(getByText(100000)).toHaveClass("property-card-price");
    expect(getByText("Email")).toHaveClass("link-text");
  });
});
