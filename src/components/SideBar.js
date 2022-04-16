import React from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <p className="filter-title">Filter by city:</p>
      <div className="sidebar-links">
        <Link className="link-item" to={`/?query={"city":"Manchester"}`}>
          Manchester
        </Link>
        <Link className="link-item" to={`/?query={"city":"Leeds"}`}>
          Leeds
        </Link>
        <Link className="link-item" to={`/?query={"city":"Sheffield"}`}>
          Sheffield
        </Link>
        <Link className="link-item" to={`/?query={"city":"Liverpool"}`}>
          Liverpool
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
