import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AllCategoriesDropdown from "./AllCategoriesDropdown"; // Import the new component
import NavPopup from "./NavPopup";
import Logo from "../../../logoo.png";
import "./Navbar.css";

const NavbarComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const stickyNavbarRef = useRef(null);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [location.pathname]);

  const handleToggleClick = () => {
    if (isMobile) {
      setShowPopup(!showPopup);
    }
  };

  const stickyNavLinks = (
    <Nav className="navbar-nav">
      <Nav.Link as={NavLink} to="/" exact activeClassName="active-nav-link">
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/aboutpage" activeClassName="active-nav-link">
        About Us
      </Nav.Link>
      <Nav.Link as={NavLink} to="/gallery" activeClassName="active-nav-link">
        Products
      </Nav.Link>
      <Nav.Link as={NavLink} to="/Newsevent" activeClassName="active-nav-link">
        News & Events
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact" activeClassName="active-nav-link">
        Contact Us
      </Nav.Link>

      {/* Use the new AllCategoriesDropdown component without the upward direction in sticky navbar */}
      <AllCategoriesDropdown />
    </Nav>
  );

  return (
    <>
      {location.pathname === "/" && !isSticky && (
        <div className="navbar-hero">
          <div className="navbar-container">
            <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
              <img src={Logo} className="logoimg" alt="Logo" />
            </Navbar.Brand>
            <Navbar expand="lg" className="w-100">
              <div className="toggle-div">
                <Container className="d-flex justify-content-between">
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggleClick}
                    className="ms-auto d-lg-none toggler-hero"
                  />
                  <div className="d-none d-lg-flex">
                    <Nav className="navbar-nav">
                      <Nav.Link
                        as={NavLink}
                        to="/"
                        exact
                        activeClassName="active-nav-link"
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/aboutpage"
                        activeClassName="active-nav-link"
                      >
                        About Us
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/gallery"
                        activeClassName="active-nav-link"
                      >
                        Products
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/Newsevent"
                        activeClassName="active-nav-link"
                      >
                        News & Events
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/contact"
                        activeClassName="active-nav-link"
                      >
                        Contact Us
                      </Nav.Link>

                      {/* Use the AllCategoriesDropdown component with dropDirection="up" in the hero section */}

                      <AllCategoriesDropdown
                        dropDirection="up"
                        className="hero-dropdown-upward"
                      />
                    </Nav>
                  </div>
                </Container>
              </div>
            </Navbar>
          </div>
        </div>
      )}

      {(location.pathname !== "/" || isSticky) && (
        <div className="navbar-sticky" ref={stickyNavbarRef}>
          <div className="navbar-container">
            <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
              <img src={Logo} className="logoimg sticky-logo-img" alt="Logo" />
            </Navbar.Brand>
            <Navbar expand="lg" className="w-100">
              <div className="nav-toggle-sticky">
                <Container className="d-flex justify-content-between">
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleToggleClick}
                    className="ms-auto d-lg-none"
                  />
                  <div className="d-none d-lg-flex">{stickyNavLinks}</div>
                </Container>
              </div>
            </Navbar>
          </div>
        </div>
      )}

      {/* Show NavPopup only on mobile */}
      {isMobile && (
        <NavPopup show={showPopup} handleClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default NavbarComponent;
