import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aboutpage.css'; // Import the CSS file for additional styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faGavel } from '@fortawesome/free-solid-svg-icons'; // Importing the icons
import missionpic from "../../mission.jpg";
import visionpic from "../../vision.png";
import valuepic from "../../values.png";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="outer-div-aboutpage">
      <div className="container py-5">
        <div className="row">
          {/* Sidebar Tabs */}
          <div className="col-md-3">
            <div className="tabs-container">
              <div
                className={`tab-item ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => handleTabClick('mission')}
              >
                <FontAwesomeIcon icon={faBullseye} className="me-2" />
                <span className="tab-text">Our Mission</span>
              </div>
              <div
                className={`tab-item ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => handleTabClick('vision')}
              >
                <FontAwesomeIcon icon={faEye} className="me-2" />
                <span className="tab-text">Our Vision</span>
              </div>
              <div
                className={`tab-item ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => handleTabClick('values')}
              >
                <FontAwesomeIcon icon={faGavel} className="me-2" />
                <span className="tab-text">Our Values</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-md-9">
            {activeTab === 'mission' && (
              <div className="content-area d-flex align-items-stretch">
                <div className="content-left">
                  <h3 className="content-title text-primary">Our Mission</h3>
                  <p className="content-description">
                    Our mission is to empower local producers by providing access to international markets, ensuring fair trade practices, and promoting the rich cultural heritage of Nepal through high-quality products.
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item">Empower local producers.</li>
                    <li className="content-list-item">Ensure fair trade practices.</li>
                    <li className="content-list-item">Promote Nepal's cultural heritage.</li>
                  </ul>
                </div>
                <img
                  src={missionpic}
                  alt="Mission"
                  className="img-fluid rounded shadow ms-3"
                  style={{ width: '45%', objectFit: 'cover' }}
                />
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="content-area d-flex align-items-stretch">
                <div className="content-left">
                  <h3 className="content-title text-primary">Our Vision</h3>
                  <p className="content-description">
                    Our vision is to expand our reach globally while maintaining a strong connection to our roots, supporting more local artisans and farmers, and increasing our range of authentic Nepali products.
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item">Expand globally while staying connected to our roots.</li>
                    <li className="content-list-item">Support local artisans and farmers.</li>
                    <li className="content-list-item">Increase our range of authentic Nepali products.</li>
                  </ul>
                </div>
                <img
                  src={visionpic}
                  alt="Vision"
                  className="img-fluid rounded shadow ms-3"
                  style={{ width: '50%', objectFit: 'cover' }}
                />
              </div>
            )}

            {activeTab === 'values' && (
              <div className="content-area d-flex align-items-stretch">
                <div className="content-left">
                  <h3 className="content-title text-primary">Our Values</h3>
                  <p className="content-description">
                    We believe in integrity, quality, and sustainability. Our values are reflected in every aspect of our business, from sourcing raw materials to the final delivery of our products.
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item">Integrity in our trading practices.</li>
                    <li className="content-list-item">Commitment to quality and sustainability.</li>
                    <li className="content-list-item">Community engagement and ethical trading.</li>
                  </ul>
                </div>
                <img
                  src={valuepic}
                  alt="Values"
                  className="img-fluid rounded shadow ms-3"
                  style={{ width: '50%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
