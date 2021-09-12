import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./Navbar.css";
import "../GlobalStyles.css"

function Navbar() {
  const [click, setClick] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleOnScroll = () => {
    if (window.scrollY >= 93) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener("scroll", handleOnScroll);

  return (
    <>
      <div className={isScroll ? "navbar active" : "navbar"}>
        <div className="navbar-container container ">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} width="65" height="34.16" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes color="#302c42" /> : <FaBars color="#302c42" />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="#home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#pricing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
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
