import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import "../../App.css";

function Navbar() {
  const location = useLocation();
  const isAboutUsPage = location.pathname === "/AboutUs";

  return (
    <nav className={isAboutUsPage ? "navbar black-navbar" : "navbar"}>
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/AboutUs" className="navbar-link">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/WomenHarvard" className="navbar-link">
              Women & Harvard
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Events" className="navbar-link">
              Events
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Gallery" className="navbar-link">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
