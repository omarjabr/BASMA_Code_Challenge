import React from "react";
import { ReactComponent as Wordpress } from "../../icons/wordpress-filled.svg";
import { ReactComponent as Vector } from "../../icons/vector.svg";
import { ReactComponent as Research } from "../../icons/keyword-research.svg";
import { ReactComponent as Mobile } from "../../icons/mobile.svg";
import { ReactComponent as List } from "../../icons/list.svg";
import { ReactComponent as Bulb } from "../../icons/bulb.svg";

import "./ServicesSection.css";
import "../GlobalStyles.css"

function ServicesSection() {
  return (
    <>
      <div id="services" className="services services-section">
        <div className="container">
          <div className="title-section">
            <p>SERVICES</p>
            <h3>Choose what</h3>
            <h3>you like our services</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="content">
                <Wordpress className="icon" />
                <h5>Create Idea</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <Vector className="icon" />
                <h5>Smart Solutions</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <Research className="icon" />
                <h5>Free Support</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="content">
                <Mobile className="icon" />
                <h5>Create Idea</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <List className="icon" />
                <h5>Smart Solutions</h5>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Ea
                  laudantium empore nobis quisquam.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <Bulb className="icon" />
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

export default ServicesSection;
