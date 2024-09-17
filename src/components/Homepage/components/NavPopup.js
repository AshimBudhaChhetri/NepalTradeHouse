import React from "react";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavPopup.css"; // Create a new CSS file for styling

const NavPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav className="flex-column nav-popup">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active-nav-link" onClick={handleClose}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cs" activeClassName="active-nav-link" onClick={handleClose}>
            About Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/gallery" activeClassName="active-nav-link" onClick={handleClose}>
            Our Gallery
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeClassName="active-nav-link" onClick={handleClose}>
            Contact Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cs" activeClassName="active-nav-link" onClick={handleClose}>
            Blog
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cs" activeClassName="active-nav-link" onClick={handleClose}>
            Language
          </Nav.Link>
        </Nav>
      </Modal.Body>
    </Modal>
  );
};

export default NavPopup;
