import React from "react";
import logo2 from "../../images/logo2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaAngleDoubleRight,
} from "react-icons/fa";
import "./FooterSection.css";
import "../GlobalStyles.css";

function FooterSection() {
  return (
    <>
      <div id="footer" className="footer footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="content">
                <div className="brand">
                  <img src={logo2} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Aliquam nam
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="content">
                <h5>About</h5>
                <ul>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaAngleDoubleRight />
                      </div>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaAngleDoubleRight />
                      </div>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaAngleDoubleRight />
                      </div>
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="content">
                <h5>Support</h5>
                <ul>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaAngleDoubleRight />
                      </div>
                      support@example.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaAngleDoubleRight />
                      </div>
                      +61 3 8376 6284
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaAngleDoubleRight />
                      </div>
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="content">
                <h5>Follow us</h5>
                <ul>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaFacebookF />
                      </div>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaTwitter />
                      </div>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="social-icons">
                        <FaInstagram />
                      </div>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div class="footer-bottom">
        <span>Copyright © All Right Reserved</span>
      </div>
    </>
  );
}

export default FooterSection;
