import React from "react";
import "./ContactUsSection.css";
import "../GlobalStyles.css"

function ContactUsSection() {
  return (
    <>
      <div id="contact" className="contact contact-section">
        <div className="container">
          <div className="box-content">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="content">
                  <h5>Address</h5>
                  <p>121 King Street, Melbourne Victoria 3000 Australia</p>
                  <h5>Phone</h5>
                  <p>+61 3 8376 6284</p>
                  <h5>Email</h5>
                  <p>support@example.com</p>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="content-right">
                  <form
                    action=""
                    className="contact-form"
                    id="contact-form"
                    method="post"
                  >
                    <div className="row">
                      <div className="col">
                        <div id="first-name-field">
                          <input
                            type="text"
                            placeholder="Name"
                            name="form-name"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div id="email-field">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="form-email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div id="subject-field">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="form-subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div id="message-field">
                          <textarea
                            cols="30"
                            rows="5"
                            id="form-message"
                            name="form-message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button"
                      type="submit"
                      id="submit"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsSection;
