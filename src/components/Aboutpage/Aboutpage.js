import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Aboutpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faGavel } from "@fortawesome/free-solid-svg-icons";
import missionpic from "../../missionpic.png";
import visionpic from "../../visionpic.png";
import valuepic from "../../valuespic.png";
import missionpic1 from "../../missionalt1.png";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="outer-div-aboutpage container-fluid">
      {/* About Us section at the top left */}

      <div className="about-us-bookmark">About Us</div>
      <div className="about-us-heading-section px-0 py-0">
        <p className="about-us-description">
          Welcome to Mountain Marts Nepal's Trade House
        </p>
      </div>

      <div className="row">
        {/* Left Side Image */}
        <div className="col-md-5 image-area d-flex justify-content-center align-items-center">
          {activeTab === "mission" && (
            <img
              src={missionpic}
              alt="Mission"
              className="img-fluid rounded shadow"
            />
          )}
          {activeTab === "vision" && (
            <img
              src={visionpic}
              alt="Vision"
              className="img-fluid rounded shadow"
            />
          )}
          {activeTab === "values" && (
            <img
              src={valuepic}
              alt="Values"
              className="img-fluid rounded shadow"
            />
          )}
        </div>

        {/* Right Side Content */}
        <div className="col-md-7 content-area">
          {/* Tabs for switching between content */}
          <div className="tabs-container d-flex">
            <div
              className={`tab-item ${activeTab === "mission" ? "active" : ""}`}
              onClick={() => handleTabClick("mission")}
            >
              <FontAwesomeIcon icon={faBullseye} className="me-2" />
              <span className="tab-text">Mission</span>
            </div>
            <div
              className={`tab-item ${activeTab === "vision" ? "active" : ""}`}
              onClick={() => handleTabClick("vision")}
            >
              <FontAwesomeIcon icon={faEye} className="me-2" />
              <span className="tab-text">Vision</span>
            </div>
            <div
              className={`tab-item ${activeTab === "values" ? "active" : ""}`}
              onClick={() => handleTabClick("values")}
            >
              <FontAwesomeIcon icon={faGavel} className="me-2" />
              <span className="tab-text">Values</span>
            </div>
          </div>

          {/* Content based on the active tab */}
          <div className="content-left">
            {activeTab === "mission" && (
              <>
                <h3 className="content-title">
                  Preserving Tradition, Inspiring Innovation
                </h3>
                <p className="content-description">
                  Our mission is to empower local producers by providing access
                  to international markets, ensuring fair trade practices, and
                  promoting the rich cultural heritage of Nepal through
                  high-quality products.
                </p>
                <ul className="content-list">
                  <li className="content-list-item">
                    Empower local producers.
                  </li>
                  <li className="content-list-item">
                    Ensure fair trade practices.
                  </li>
                  <li className="content-list-item">
                    Promote Nepal's cultural heritage.
                  </li>
                </ul>
              </>
            )}
            {activeTab === "vision" && (
              <>
                <h3 className="content-title">
                  Empowering Nepal, One Product at a Time
                </h3>
                <p className="content-description">
                  Our vision is to expand our reach globally while maintaining a
                  strong connection to our roots, supporting more local artisans
                  and farmers, and increasing our range of authentic Nepali
                  products.
                </p>
                <ul className="content-list">
                  <li className="content-list-item">
                    Expand globally while staying connected to our roots.
                  </li>
                  <li className="content-list-item">
                    Support local artisans and farmers.
                  </li>
                  <li className="content-list-item">
                    Increase our range of authentic Nepali products.
                  </li>
                  <li className="content-list-item">
                    Promote ethical and sustainable practices.
                  </li>
                </ul>
              </>
            )}
            {activeTab === "values" && (
              <>
                <h3 className="content-title">
                  Rooted in Culture, Driven by Integrity
                </h3>
                <p className="content-description">
                  We believe in integrity, quality, and sustainability. Our
                  values are reflected in every aspect of our business, from
                  sourcing raw materials to the final delivery of our products.
                </p>
                <ul className="content-list">
                  <li className="content-list-item">
                    Integrity in our trading practices.
                  </li>
                  <li className="content-list-item">
                    Commitment to quality and sustainability.
                  </li>
                  <li className="content-list-item">
                    Community engagement and ethical trading.
                  </li>
                  <li className="content-list-item">
                    Preserving Cultural Heritage.
                  </li>
                  <li className="content-list-item">
                    Respect for the environment.
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
