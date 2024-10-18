import React from "react";
import { Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./NavPopupUnique.css"; // Change the CSS file name for uniqueness

const NavPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav className="flex-column nav-popup-unique">
          <Nav.Link
            as={NavLink}
            to="/"
            exact
            activeClassName="active-nav-link-unique"
            onClick={handleClose}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/aboutpage"
            activeClassName="active-nav-link-unique"
            onClick={handleClose}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/gallery"
            activeClassName="active-nav-link-unique"
            onClick={handleClose}
          >
            Products
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            activeClassName="active-nav-link-unique"
            onClick={handleClose}
          >
            Contact Us
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/newsevent"
            activeClassName="active-nav-link-unique"
            onClick={handleClose}
          >
            News & Event
          </Nav.Link>
        </Nav>
      </Modal.Body>
    </Modal>
  );
};

export default NavPopup;
