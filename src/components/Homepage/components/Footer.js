import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../../logoo.png"; // Update with your logo path
import "./Footer.css"; // Optional CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer text-light py-4 text-center">
      <Container>
        <Row className="mb-4">
          {/* Left Section */}
          <Col md={4} className="footer-left text-center">
            <div className="footer-logo mb-3">
              <img src={Logo} alt="Company Logo" className="footer-logo-img" />
            </div>
            <p className="footer-company-name">Nepal Trade House</p>
            <p className="footer-address">
              KapelStraat 15, Bussum, The Netherlands
            </p>
            <p className="footer-phone">Tel: +31357854597</p>
          </Col>

          {/* Middle Section */}
          <Col md={4} className="footer-middle text-center">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <NavLink to="/" className="footer-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutpage" className="footer-link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="footer-link">
                  Our Products
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="footer-link">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/newsevent" className="footer-link">
                  News & Event
                </NavLink>
              </li>
            </ul>
          </Col>

          {/* Right Section */}
          <Col md={4} className="footer-right text-center">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-links text-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="m-0">
              &copy; {new Date().getFullYear()} Powered By ANRIKA. All rights
              reserved.
            </p>
          </Col>
        </Row>

        {/* Additional Links Section */}
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-useful-links">
              Other useful links:
              <a
                href="https://nepalifecare.org"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Nepalifecare.org
              </a>{" "}
              |
              <a
                href="https://diwalipalace.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Diwalipalace.nl
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
