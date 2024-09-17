import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TeaCoffee.css";
import logospices from "../../../centurylogo.png";
import spicesbg from "../../../spicesbg.jpg";
import iceimg from "../../../nepaliceprod.png";
import icecan from "../../../cannepalice.png"
import bgrandomice from '../../../icebg.png';
import greenice from "../../../greennepalice.png";
import whiteice from "../../../premnepalice.png";
import orangeice from "../../../orangeice.png";
import orangecan from "../../../orangecan.png";
import coffee1 from "../../../coffee1.png";
import coffee2 from "../../../coffee2.png";
import coffee3 from "../../../coffee3.png";
import coffee4 from "../../../coffee4.png";
import coffee5 from "../../../coffee5.png";
import coffee6 from "../../../coffee6.png";

const TeaCoffee = () => {
  const [scrolled, setScrolled] = useState(false);


  return (
    <div className={`tc-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="row no-gutters-tc">
          <div
            className={`col-md-4 ${
              scrolled ? "full-width-logo" : "content-text-tc"
            }`}
          >
            <div className="image-logo-div-tc">
              <img
                src={logospices}
                className="image-logo-tc"
                alt="tc Logo"
              />
            </div>
    
              <p>
                Century Garam Masala is a pack of traditional spice blend used in everyday cooking. Century Garam Masala adds aroma and flavor to any dish, to raise its taste exponentially. Century's perfect mixes of herbs and spices to make your cuisine more special.


Century Group of Companies’ extensive portfolio comprises of Dugar Spices & Food Products Pvt. Ltd., National Polymer & Chemical Industries, Asia Chem Pvt. Ltd., National Pipe Industry, Amit Enterprises, New Saurav Impex, Asian Life Insurance Co. Ltd., Hotel Harrison Palace Pvt. Ltd., Fun & Food Village Resort and Centurian Hotel (RAMADA) & Malls Pvt. Ltd.
Century Group is a firm advocate of sustainable growth and is committed to its role as a responsible corporate conglomerate. At the heart of our success are the communities in which we live and work, and we are ever eager to give back to them through different Corporate Social Responsibility initiatives.

Our vision is not only to grow our business ethically but also to consistently work towards satisfying our valued customers, whether it is through our products or our services.
Century is driven by a constant zeal of coming up with new and exciting products that help us stay at the top. Maintaining brand trust and loyalty is our primary objective as we continue to deliver only the best.
              </p>
    
          </div>
        
            <div className="col-md-8 img-kolom">
              <img src={spicesbg} className="tc-bg" alt="Background" />
            </div>
    

       
          
        </div>
        {/* Scroll Down Indicator */}
     
       
     
  
          <div>
            <div className="col-md-12">
              <div className="card-style-1 first-card ">
                <div className="card-left">
                  <h1 className="card-title-prod">SUBSCRIPTION NEPAL</h1>
                  
                  <p className="card-text-prod">
                  Our coffee from Nepal is mild, with a creamy, full (after)taste. In this specialty coffee you will find notes of fruit and nuts. This 100% Arabica grows at an altitude of 1200-1400 meters, in the mountainous district of Lamjung. For the connoisseurs who really take the time for their cup of coffee.
                  </p>
                  <Link to="/productshowcase?category=cof">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                  <div className="img-div-card-tc">
                    {/* <img
                      src={icecan}
                      className="tccan-prod-img-card"
                      alt="Product"
                    /> */}
                    <img
                      src={coffee1}
                      className="tc-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-tc"
                      alt="Product"
                    />
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

 
          <div>
            <div className="col-md-12">
              <div className="card-style-1 ">
                <div className="card-right">
                <div className="img-div-card-tc">
                    {/* <img
                      src={whiteice}
                      className="tccan-prod-img-card"
                      alt="Product"
                    /> */}
                    <img
                      src={coffee2}
                      className="tc-prod-img-card"
                      alt="Product"
                    />
                     <img
                      src={bgrandomice}
                      className="bg-random-tc2"
                      alt="Product"
                    />
                    
                    
                    
                  </div>
                </div>
                <div className="card-left">
                  <h1 className="card-title-prod">NEPAL AND COSTA RICA</h1>
                  
                  <p className="card-text-prod">
                  Nepal meets Costa Rica! A delicious combination of our coffee from Nepal with an honest quality coffee from Costa Rica. The combination of the mild taste from Nepal with the deeper taste of the Caturra from Costa Rica provides a delicious aftertaste. Both for the coffee lovers of a Latte or a Capuccino; but also for the lovers of a somewhat stronger cup of black coffee. This taste is the most powerful in our range and is perfectly suited for the 'advanced' coffee drinker.
                  </p>
                  <Link to="/productshowcase?category=cof">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

   
          <div>
            <div className="col-md-12">
              <div className="card-style-1 ">
                <div className="card-left">
                  <h1 className="card-title-prod">DARK ROAST</h1>
              
                  <p className="card-text-prod">
                  Nepal meets the world! A delicious combination of our coffee from Nepal combined with an honest quality coffee from one of our other origins. The dark roast coffee beans from 80 Days are for the coffee drinker who loves a spicy espresso and for lovers of a flat white, latte or a cappuccino.
                  </p>
                  <Link to="/productshowcase?category=cof">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                <div className="img-div-card-tc">
                    {/* <img
                      src={orangecan}
                      className="tccan-prod-img-card"
                      alt="Product"
                    /> */}
                    <img
                      src={coffee3}
                      className="tc-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-tc3"
                      alt="Product"
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div>
            <div className="col-md-12">
              <div className="card-style-1 ">
                <div className="card-right">
                <div className="img-div-card-tc">
                    {/* <img
                      src={}
                      className="tccan-prod-img-card"
                      alt="Product"
                    /> */}
                    <img
                      src={coffee4}
                      className="tc-prod-img-card"
                      alt="Product"
                    />
                     <img
                      src={bgrandomice}
                      className="bg-random-tc4"
                      alt="Product"
                    />
                    
                    
                    
                  </div>
                </div>
                <div className="card-left">
                  <h1 className="card-title-prod">NEPAL AND PERU</h1>
                  
                  <p className="card-text-prod">
                  A delicious combination of our coffee from Nepal with an honest quality coffee from Peru. The combination of the mild taste from Nepal with the deeper taste of the Churupampa delivers a delicious aftertaste with notes of orange blossom, tropical fruit and a dark choco finish… For both coffee lovers of a latte and a cappuccino, but also for black coffee drinkers. This flavor is the most powerful in our range and is perfectly suited for the 'advanced' coffee drinker.
                  </p>
                  <Link to="/productshowcase?category=cof">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  


          <div>
            <div className="col-md-12">
              <div className="card-style-1 ">
                <div className="card-left">
                  <h1 className="card-title-prod">NEPAL AND NICARAGUA</h1>
              
                  <p className="card-text-prod">
                  A delicious combination of our coffee from Nepal with an honest quality coffee from Nicaragua. The combination of the mild coffee taste from Nepal with a somewhat spicier taste of the El Paraíso produces a very tasty coffee… For the coffee lover who likes a taste challenge. Both for coffee lovers of a latte and a cappuccino, but also for black coffee drinkers.
                  </p>
                  <Link to="/productshowcase?category=cof">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                <div className="img-div-card-tc">
                    {/* <img
                      src={orangecan}
                      className="tccan-prod-img-card"
                      alt="Product"
                    /> */}
                    <img
                      src={coffee5}
                      className="tc-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-tc5"
                      alt="Product"
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
   


          <div>
            <div className="col-md-12">
              <div className="card-style-1 ">
                <div className="card-right">
                <div className="img-div-card-tc">
                    {/* <img
                      src={whiteice}
                      className="tccan-prod-img-card"
                      alt="Product"
                    /> */}
                    <img
                      src={coffee6}
                      className="tc-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-tc6"
                      alt="Product"
                    />
                    
                    
                    
                  </div>
                </div>
                <div className="card-left">
                  <h1 className="card-title-prod">NEPAL AND ETHIOPIE</h1>
                  
                  <p className="card-text-prod">
                  A surprisingly sweet dance between our coffee from Nepal with a (h)onest quality coffee from Ethiopia. The combination of the mild taste from Nepal with the floral and complex fruit tones of the Galeh from Ethiopia produces a delicious aftertaste of red fruit and hazelnut... This taste is especially popular with black coffee drinkers. The different taste tones come into their own most if you really take the time for your cup of coffee. Brew this coffee 'slow' with the V60 filter brewing method.
                  </p>
                  <Link to="/productshowcase?category=cof">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        
      </div>
    </div>
  );
};

export default TeaCoffee;
