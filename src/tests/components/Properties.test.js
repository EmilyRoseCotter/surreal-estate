import React from "react";
import { render } from "@testing-library/react";
import Properties from "../../components/Properties";

describe("View Properties page", () => {
  it("renders property cards", () => {
    const { asFragment } = render(<Properties />);

    expect(asFragment()).toMatchSnapshot();
  });
});
