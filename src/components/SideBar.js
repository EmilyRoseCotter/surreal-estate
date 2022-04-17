import React from "react";
import qs from "qs";
import { Link, useLocation } from "react-router-dom";
import "../styles/SideBar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

function SideBar() {
  return (
    <div className="side-bar">
      <p className="filter-title">Filter by city:</p>
      <div className="sidebar-links">
        <Link
          className="link-item"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="link-item"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="link-item"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <Link
          className="link-item"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>
        <p className="filter-title">Sort by:</p>
        <Link
          className="link-item"
          to={buildQueryString("sort", { price: +1 })}
        >
          Price ascending
        </Link>
        <Link
          className="link-item"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price descending
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
