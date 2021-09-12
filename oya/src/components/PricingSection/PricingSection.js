import React from "react";
import "./PricingSection.css";
import "../GlobalStyles.css"

function PricingSection() {
  return (
    <>
      <div id="pricing" className="pricing pricing-section">
        <div className="container">
          <div className="title-section">
            <p>PRICING TABLE</p>
            <h3>Your plance, your choise</h3>
          </div>
          <div className="row">
            <div class="col-md-4">
              <div class="content">
                <h4>Basic</h4>
                <span>$15</span>
                <ul>
                  <li>Responsive</li>
                  <li>Documentation</li>
                  <li class="not-active">Support</li>
                  <li class="not-active">Multimedia</li>
                  <li class="not-active">Creative</li>
                  <li class="not-active">Modern</li>
                  <li class="not-active">Free Update</li>
                </ul>
              </div>
              <button class="button">Get Started</button>
            </div>
            <div class="col-md-4">
              <div class="content content-center">
                <h4>Standart</h4>
                <span>$30</span>
                <ul>
                  <li>Responsive</li>
                  <li>Documentation</li>
                  <li>Support</li>
                  <li>Multimedia</li>
                  <li class="not-active">Creative</li>
                  <li class="not-active">Modern</li>
                  <li class="not-active">Free Update</li>
                </ul>
              </div>
              <button class="button">Get Started</button>
            </div>
            <div class="col-md-4">
              <div class="content">
                <h4>Premium</h4>
                <span>$50</span>
                <ul>
                  <li>Responsive</li>
                  <li>Documentation</li>
                  <li>Support</li>
                  <li>Multimedia</li>
                  <li>Creative</li>
                  <li>Modern</li>
                  <li>Free Update</li>
                </ul>
              </div>
              <button class="button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingSection;
