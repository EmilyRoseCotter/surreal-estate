import React, { useState } from "react";
import qs from "qs";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="side-bar">
      <form className="property-search" onSubmit={handleSearch}>
        <input
          className="property-search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="property-search-button" type="submit">
          Search
        </button>
      </form>
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
