import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surreal estate logo"
      />
      <ul className="navbar-links">
        <NavLink to="/" className="navbar-links-item">
          <li>View properties</li>
        </NavLink>
        <NavLink to="/add-property" className="navbar-links-item">
          <li>Add a property</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
