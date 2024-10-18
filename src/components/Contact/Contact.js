import React from "react";
import "./Contact.css";
import phoneicon from "../../phoneicon.png";
import email from "../../email.png";
import instagram from "../../instagram.png";
import facebook from "../../facebook.png";
import twitter from "../../twitter.png";
import linkedin from "../../linkedin-logo.png";
import contactimg from "../../piccontact.png";

const Contact = () => {
  return (
    <div className="main-contact-div">
      <div className="container-fluid">
        <div className="row card-contact">
          {/* Left side: Map */}
          <div className="col-md-6 map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4499945098347!2d85.32088417478293!3d27.711907226196436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1914ba8c5297%3A0x72b33c7f712cfe38!2sKathmandu%20Valley!5e0!3m2!1sen!2snp!4v1614739403014!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
            <div className="img-contact-div">
            <img className="random-contact-img" src={contactimg} alt="Contact" />
            </div>
          
          </div>

          {/* Right side: Contact Form */}
          <div className="col-md-6">
            <div className="contact-form">
              <div className="form-header">
            
                <h1>Contact Us</h1>
                <p>Feel free to reach out by filling the form below</p>
         
              </div>
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" className="form-control" placeholder="Enter Your Email Address" />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="text" className="form-control" placeholder="Enter your Contact Number" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Enter Your Message" className="form-control" rows="3"></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  SUBMIT
                </button>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
