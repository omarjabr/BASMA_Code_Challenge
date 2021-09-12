import React from "react";
// import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";
import "./HomeSection.css";
import "../GlobalStyles.css"

function HomeSection() {
  return (
    <>
      <div id="home" className="home-section">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-6 col-12">
              <div className="content">
                <h5>
                  <span className="line"></span>
                  WELCOME TO OYA
                </h5>
                <h2>A DIGITAL</h2>
                <h2>AGENCY</h2>
                <ul>
                  <li>
                    <Link to="/" className="button">
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="button2">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-12">
              <div className="content-image">
                <img src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
