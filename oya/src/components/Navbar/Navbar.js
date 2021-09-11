import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <img src={logo} width="65" height="34.16" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes color="#302c42" /> : <FaBars color="#302c42" />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-links">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-links">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-links">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
