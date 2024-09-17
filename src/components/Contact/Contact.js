import React from "react";
import "./Contact.css";
import phoneicon from "..//../phoneicon.png"
import email from "../../email.png";
import instagram from "../../instagram.png";
import facebook from "../../facebook.png";
import twitter from "../../twitter.png";
import linkedin from "../../linkedin-logo.png";
const Contact = () => {
  return (
    <div className="main-contact-div">
      <div className="container-fluid">
        <div className="row card-contact">
          <div className="col-md-12">
            <div className="contact-header">
              
              <h1>Get in Touch</h1>
              <p>Connect with Us, We're Just a Message Away</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <div className="name-inputs">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Instructions</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label>Suggestions</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </form>
            <div className="social-icons">
              <a href="#">
                <img src={email} alt="Email" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitter}alt="Twitter" />
              </a>
              <a href="#">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
