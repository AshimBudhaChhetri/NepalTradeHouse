import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavPopup from "./NavPopup";
import Logo from "../../../logoo.png";
import "./Navbar.css";
import momopic from "../../../momo.png";
import restaurantpic from "../../../restaurant.jpg";
import fashion from "../../../fashion.jpg";

const NavbarComponent = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to check if the device is mobile
  const location = useLocation();
  const stickyNavbarRef = useRef(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Detect screen width to check if it's mobile
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
    // Only show the popup on mobile devices
    if (isMobile) {
      setShowPopup(!showPopup);
    }
  };

  const categories = {
    "Top Categories": {
      items: [
        "Restaurant / Decor",
        "Food & Beverages",
        "Fashion & Outfit",
        "Raw Materials",
        "Health & Happiness of Personal Care",
      ],
      images: [restaurantpic, fashion, momopic, restaurantpic, fashion],
    },
    Gifts: {
      items: ["XYZ", "ABC"],
      images: [fashion, restaurantpic],
    },
    Services: {
      items: [
        "Information Technology",
        "Accounting & Financial Services",
        "Health & Wellness Services",
        "Legal Aid Services",
        "Travel & Tourism Services",
      ],
      images: [momopic, restaurantpic, momopic, fashion, momopic],
    },
  };

  const handleCategoryHover = (category) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      setActiveCategory(category);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleDropdownClick = () => {
    setShowDropdown((prev) => !prev);
    if (!showDropdown) {
      setActiveCategory("Top Categories");
    } else {
      setActiveCategory(null);
    }
  };

  const handleAllCategoriesClick = () => {
    if (stickyNavbarRef.current) {
      stickyNavbarRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setShowDropdown(true);

        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        const timeout = setTimeout(() => {
          setActiveCategory("Top Categories");
        }, 300);
        setHoverTimeout(timeout);
      }, 500);
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
        Our Gallery
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact" activeClassName="active-nav-link">
        Contact Us
      </Nav.Link>
      <Nav.Link as={NavLink} to="/cs" activeClassName="active-nav-link">
        Blog
      </Nav.Link>
      <Nav.Link as={NavLink} to="/cs" activeClassName="active-nav-link">
        Language
      </Nav.Link>

      <Dropdown className="sticky-dropdown" drop="down" show={showDropdown}>
        <Dropdown.Toggle
          variant="link"
          className="nav-link"
          onClick={handleDropdownClick}
        >
          All Categories
        </Dropdown.Toggle>

        <Dropdown.Menu className="sticky-dropdown-menu">
          <div className="custom-dropdown-content">
            <div className="dropdown-column images-column">
              {activeCategory &&
                categories[activeCategory].images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="dropdown-image"
                  />
                ))}
            </div>

            <div className="dropdown-column items-column">
              {activeCategory &&
                categories[activeCategory].items.map((item, index) => (
                  <div key={index} className="dropdown-item">
                    {item}
                  </div>
                ))}
            </div>

            <div className="dropdown-column title-column">
              {Object.keys(categories).map((title) => (
                <div
                  key={title}
                  className={`dropdown-title ${
                    activeCategory === title ? "active" : ""
                  }`}
                  onMouseEnter={() => handleCategoryHover(title)}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
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
                    className="me-auto d-lg-none"
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
                        to="/cs"
                        activeClassName="active-nav-link"
                      >
                        About Us
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/gallery"
                        activeClassName="active-nav-link"
                      >
                        Our Gallery
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/contact"
                        activeClassName="active-nav-link"
                      >
                        Contact Us
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/cs"
                        activeClassName="active-nav-link"
                      >
                        Blog
                      </Nav.Link>
                      <Nav.Link
                        as={NavLink}
                        to="/cs"
                        activeClassName="active-nav-link"
                      >
                        Language
                      </Nav.Link>

                      <Dropdown
                        className="hero-dropdown"
                        drop="up"
                        show={showDropdown}
                      >
                        <Dropdown.Toggle
                          variant="link"
                          className="nav-link"
                          onClick={handleDropdownClick}
                        >
                          All Categories
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="hero-dropdown-menu">
                          <div className="custom-dropdown-content">
                            <div className="hero-dropdown-column hero-images-column">
                              {activeCategory &&
                                categories[activeCategory].images.map(
                                  (image, index) => (
                                    <img
                                      key={index}
                                      src={image}
                                      alt={`Image ${index + 1}`}
                                      className="hero-dropdown-image"
                                    />
                                  )
                                )}
                            </div>

                            <div className="hero-dropdown-column hero-items-column">
                              {activeCategory &&
                                categories[activeCategory].items.map(
                                  (item, index) => (
                                    <div
                                      key={index}
                                      className="hero-dropdown-item"
                                    >
                                      {item}
                                    </div>
                                  )
                                )}
                            </div>

                            <div className="hero-dropdown-column hero-title-column">
                              {Object.keys(categories).map((title) => (
                                <div
                                  key={title}
                                  className={`hero-dropdown-title ${
                                    activeCategory === title ? "active" : ""
                                  }`}
                                  onMouseEnter={() => handleCategoryHover(title)}
                                >
                                  {title}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
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
                    className="ml-auto d-lg-none"
                  />
                  <div className="d-none d-lg-flex">{stickyNavLinks}</div>
                </Container>
              </div>
            </Navbar>
          </div>
        </div>
      )}

      {/* Show NavPopup only on mobile */}
      {isMobile && <NavPopup show={showPopup} handleClose={() => setShowPopup(false)} />}
    </>
  );
};

export default NavbarComponent;
