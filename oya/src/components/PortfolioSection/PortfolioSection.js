import React from "react";
import portfolio1 from "../../images/portfolio1.jpeg";
import portfolio2 from "../../images/portfolio2.jpeg";
import portfolio3 from "../../images/portfolio3.jpeg";
import portfolio4 from "../../images/portfolio4.jpeg";
import portfolio5 from "../../images/portfolio5.jpeg";
import portfolio6 from "../../images/portfolio6.jpeg";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <>
      <div id="portfolio" className="portfolio portfolio-section">
        <div className="container">
          <div className="title-section">
            <p>PORTFOLIO</p>
            <h3>
              See our <span>amazing</span>
            </h3>
            <h3>
              <span>portfolio</span> collection
            </h3>
          </div>
          <div className="box-content">
            <div className="portfolio-filter-menu">
              <ul>
                <li className="active">
                  <span>Show All</span>
                </li>
                <li className="">
                  <span>Graphic</span>
                </li>
                <li className="">
                  <span>Landing</span>
                </li>
                <li className="">
                  <span>Art Design</span>
                </li>
              </ul>
            </div>
            <div className="row no-gutters item-grid">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="content-image">
                  <img src={portfolio1} alt="portfolio1" />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="content-image">
                  <img src={portfolio2} alt="portfolio2" />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="content-image">
                  <img src={portfolio3} alt="portfolio3" />
                </div>
              </div>
            </div>
            <div className="row no-gutters item-grid">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="content-image">
                  <img src={portfolio4} alt="portfolio4" />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="content-image">
                  <img src={portfolio5} alt="portfolio5" />
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="content-image">
                  <img src={portfolio6} alt="portfolio6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
