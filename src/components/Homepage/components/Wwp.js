import React, { useState } from "react";
import "./Wwp.css";
import Khukuri from "../../../Khukuri.png";
import Century from "../../../centurylogo.png";
import Coffee88 from "../../../coffeelogoo.png";
import logonepalice from "../../../beerimg.png";
import nepalicebg from "../../../beerbg.png";
import KhukuriBackground from "../../../rumdisbg.jpg";
import { Link } from 'react-router-dom';
import SpicesBackground from "../../../spicedisbg.jpg";
import teacoffee from "../../../teacoffeebg.png";
import initialBg from "../../../bgwwp5.webp"; // Import the initial background image

const Wwp = () => {
  const [backgroundImage, setBackgroundImage] = useState(initialBg); // Set initial background image
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  const handleMouseEnter = (image) => {
    setBackgroundImage(image);
    setIsTitleVisible(false); // Hide title on hover
  };

  const handleMouseLeave = () => {
    setBackgroundImage(initialBg); // Reset to the initial background image
    setIsTitleVisible(true); // Show title when not hovering
  };

  return (
    <div
      className="main-wwp-div"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Smooth transition for background change
      }}
    >
      <div className="hrblue"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={`Wwp-title ${isTitleVisible ? "" : "hidden"}`}>
              <h2 className="Wwp-h2 text-center">
                What We <span className="span-1">Provide?</span>
              </h2>
              <h3 className="Wwp-sub-title text-center">
                Experience our exceptional services and quality products.
              </h3>
            </div>
          </div>
        </div>
        <div className="row items-outer-div">
          {/* Khukuri Rum Card */}
          <div
            className="col-md-3 col-sm-6 col-12"
            onMouseEnter={() => handleMouseEnter(KhukuriBackground)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="items-info text-center">
              <div className="img-div-Wwp">
                <img className="items-img" src={Khukuri} alt="Khukuri Rum" />
              </div>
              <div className="items-brief">
                <div className="items-brief-inner">
                  <h2 className="items-h2">Nepali Spirits</h2>
                  <h4 className="items-h4">Nepali Spirits, Bold Heritage</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Nepal Ice Card */}
          <div
            className="col-md-3 col-sm-6 col-12"
            onMouseEnter={() => handleMouseEnter(nepalicebg)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="items-info text-center">
              <div className="img-div-Wwp">
                <img className="items-img" src={logonepalice} alt="Nepal Ice" />
              </div>
              <div className="items-brief">
                <div className="items-brief-inner">
                  <h2 className="items-h2">Nepali Brewery</h2>
                  <h4 className="items-h4">Crafted Perfection, Bold Brews</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Spices Card */}
          <div
            className="col-md-3 col-sm-6 col-12"
            onMouseEnter={() => handleMouseEnter(SpicesBackground)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="items-info text-center">
              <div className="img-div-Wwp">
                <img className="items-img centuryimg" src={Century} alt="Spices" />
              </div>
              <div className="items-brief">
                <div className="items-brief-inner">
                  <h2 className="items-h2">Spices</h2>
                  <h4 className="items-h4">Janakpur Spices, Authentic Flavor</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Tea & Coffee Card */}
          <div
            className="col-md-3 col-sm-6 col-12"
            onMouseEnter={() => handleMouseEnter(teacoffee)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="items-info text-center">
              <div className="img-div-Wwp">
                <img className="items-img" src={Coffee88} alt="Tea & Coffee" />
              </div>
              <div className="items-brief">
                <div className="items-brief-inner">
                  <h2 className="items-h2">Tea & Coffee</h2>
                  <h4 className="items-h4">Himalayan Brews, Pure Elevation</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="col-md-12 text-center buttons-kolom">
            <Link to="/productshowcase?category=beer">
              <button className="button-Wwp">
                <span className="Wwp-span">Shop Now</span>
              </button>
            </Link>
            <button className="button-Wwp">
              <span className="Wwp-span">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wwp;
