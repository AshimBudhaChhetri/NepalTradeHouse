import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Spices.css";
import logospices from "../../../centurylogo.png";
import spicesbg from "../../../spicesbg.jpg";
import iceimg from "../../../nepaliceprod.png";
import icecan from "../../../cannepalice.png"
import bgrandomice from '../../../icebg.png';
import greenice from "../../../greennepalice.png";
import whiteice from "../../../premnepalice.png";
import orangeice from "../../../orangeice.png";
import orangecan from "../../../orangecan.png";

const Spices = () => {
  const [scrolled, setScrolled] = useState(false);



  return (
    <div className={`spices-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="row no-gutters-spices">
          <div
            className={`col-md-4 ${
              scrolled ? "full-width-logo" : "content-text-spices"
            }`}
          >
            <div className="image-logo-div-spices">
              <img
                src={logospices}
                className="image-logo-spices"
                alt="Spices Logo"
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
              <img src={spicesbg} className="spices-bg" alt="Background" />
            </div>
         

       
          
        </div>
    
        
       
       
          <div>
            <div className="col-md-12">
              <div className="card-style-1 first-card ">
                <div className="card-left">
                  <h1 className="card-title-prod">NEPAL ICE NATURA</h1>
                  <p className="card-category">Category: Beer / Domestic Beer</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 5%</p>
                  <p className="card-text-prod">
                  Nepal Ice Natura is the Nepal's first barley beer made from 100% Natural Barley. This type of barley beer is manufactured by few selected World Class Companies in the world and CG Brewery has joined this elite club to offer Nepalese Consumers unique experience of drinking this type of beer which makes use of Natural Barley.
                  Being a product which is made from Natural Barley, Nepal Ice Natura beer has unique pleasant taste and mouth feel.
                  </p>
                  <Link to="/productshowcase?category=cen">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                  <div className="img-div-card-spices">
                    <img
                      src={icecan}
                      className="spicescan-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={greenice}
                      className="spices-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-spices"
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
                <div className="img-div-card-spices">
                    <img
                      src={whiteice}
                      className="spicescan-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={iceimg}
                      className="spices-prod-img-card"
                      alt="Product"
                    />
                      <img
                      src={bgrandomice}
                      className="bg-random-spices2"
                      alt="Product"
                    />
                    
                    
                    
                    
                  </div>
                </div>
                <div className="card-left">
                  <h1 className="card-title-prod">NEPAL ICE PREMIUM</h1>
                  <p className="card-category">Category: Beer / Doemstic Beer</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 5%</p>
                  <p className="card-text-prod">
                    Nepal Ice Natura is the Nepal's first barley beer made from 100% Natural Barley. This type of barley beer is manufactured by few selected World Class Companies in the world and CG Brewery has joined this elite club to offer Nepalese Consumers unique experience of drinking this type of beer which makes use of Natural Barley.
                    Being a product which is made from Natural Barley, Nepal Ice Natura beer has unique pleasant taste and mouth feel.
                  </p>
                  <Link to="/productshowcase?category=cen">
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
                  <h1 className="card-title-prod">NEPAL ICE STRONG</h1>
                  <p className="card-category">Category: Rum</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 40%</p>
                  <p className="card-text-prod">
                  Nepal Ice Natura is the Nepal's first barley beer made from 100% Natural Barley. This type of barley beer is manufactured by few selected World Class Companies in the world and CG Brewery has joined this elite club to offer Nepalese Consumers unique experience of drinking this type of beer which makes use of Natural Barley.

Being a product which is made from Natural Barley, Nepal Ice Natura beer has unique pleasant taste and mouth feel.
                  </p>
                  <Link to="/productshowcase?category=cen">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                <div className="img-div-card-spices">
                    <img
                      src={orangecan}
                      className="spicescan-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={orangeice}
                      className="spices-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-spices3"
                      alt="Product"
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
   
        
      </div>
    </div>
  );
};

export default Spices;
