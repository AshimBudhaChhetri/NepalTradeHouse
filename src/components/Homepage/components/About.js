import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'; // Import the Link component

const About = () => {
  return (
    <div className='about-main-div'>
      <div className='box-1'></div>
      <div className='box-2'></div>
      <div className='container outer-about'>
        <div className='row about-div'>
          <div className='col-md-5'>
            <div className='about-content'>
              <h2 className='title-about'>
                About <span className='title-about-span'>Us</span>
              </h2>
              <h3 className='text-about'>
                Welcome to Nepal Trade House, where the rich culture and warm hospitality of Nepal come alive. Nestled
                in the heart of the city, our establishment is designed to offer guests an authentic Nepali experience.
                From the moment you step through our doors, you will be transported to the vibrant and enchanting world
                of Nepal.
                <br />
                <br />
                Our architecture is a harmonious blend of traditional Nepali design and modern comfort. The intricate
                woodwork, handcrafted by skilled artisans, tells the stories of ancient legends and traditions. The
                decor features beautiful artifacts, paintings, and sculptures that reflect the rich cultural heritage of
                Nepal. Each piece has been carefully selected to create an ambiance that is both welcoming and
                inspiring.
                <br />
                <br />
                At our restaurant, you can savor the flavors of Nepal with our exquisite local cuisine.
              </h3>
              <Link to="/aboutpage">
                <button className="button-Aboutus">
                  <span className="About-span">Learn More</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-container">
              <div className="small-box top-left"></div>
              <div className="large-box">
                <div className="half-div"></div>
              </div>
              <div className="small-box bottom-right"></div>
            </div>
          </div>
        </div>
      </div>

      <div className='box-3'></div>
      <div className='box-4'></div>
    </div>
  );
};

export default About;
