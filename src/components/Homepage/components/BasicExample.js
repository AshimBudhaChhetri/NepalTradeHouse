import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./NavbarComponent";
import banner1 from "../../../xyz1.jpg";
import banner2 from "../../../xyz3.webp";
import rumicon1 from "../../../rumicon.png"; // First overlay icon
import rumicon2 from "../../../momo.png"; // Second overlay icon
import janakpurbg from "../../../janakpur.jpg"; // Second overlay icon
import lumbinibg from "../../../lumbinibg.png"; 
import rumicon3 from "../../../spicesicon.png"; 
import rumicon4 from "../../../monkmed.png"; 
import "./Navbar.css";

function BasicExample() {
  return (
    <div className="main-banner">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <div className="hero-text text-center">
              <h1 className="h1">Experience The Essence Of Nepal</h1>
            </div>
          </Carousel.Caption>
          {/* First overlay image */}
          <div className="carousel-overlay-image1" >

          <img
            src={rumicon1}
            alt="Overlay"
            className="overlay-image-1"
          />
          </div>
          
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <div className="hero-text">
              <h1>Experience The Essence Of Nepal</h1>
            </div>
          </Carousel.Caption>
          <div className="carousel-overlay-image2" >

<img
  src={rumicon2}
  alt="Overlay"
  className="overlay-image-2"
/>
</div>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={janakpurbg} alt="Second slide" />
          <Carousel.Caption>
            <div className="hero-text">
              <h1>Experience The Essence Of Nepal</h1>
            </div>
          </Carousel.Caption>
          <div className="carousel-overlay-image3" >

<img
  src={rumicon3}
  alt="Overlay"
  className="overlay-image-3"
/>
</div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={lumbinibg} alt="Second slide" />
          <Carousel.Caption>
            <div className="hero-text">
              <h1>Experience The Essence Of Nepal</h1>
            </div>
          </Carousel.Caption>
          <div className="carousel-overlay-image4" >

<img
  src={rumicon4}
  alt="Overlay"
  className="overlay-image-4"
/>
</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BasicExample;
