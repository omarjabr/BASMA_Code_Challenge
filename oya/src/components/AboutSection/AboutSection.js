import React from "react";
import { ReactComponent as Bulb } from "../../icons/bulb.svg";
import { ReactComponent as Sun } from "../../icons/sun.svg";
import { ReactComponent as Comments } from "../../icons/comments.svg";
import "./AboutSection.css";
import "../GlobalStyles.css"

function AboutSection() {
  return (
    <>
      <div id="about" className="about about-section">
        <div className="container">
          <div className="title-section">
            <p>ABOUT US</p>
            <h3>Our goal is to</h3>
            <h3>make your life easier</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="content">
                <Bulb className="icon" />
                <h5>Create Idea</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <Sun className="icon" />
                <h5>Smart Solutions</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <Comments className="icon" />
                <h5>Free Support</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
