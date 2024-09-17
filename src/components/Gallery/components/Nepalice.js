import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Nepalice.css";
import logonepalice from "../../../nepalicelogo.png";
import nepalicebg from "../../../nepalicebg1.jpg";
import iceimg from "../../../nepaliceprod.png";
import icecan from "../../../cannepalice.png"
import bgrandomice from '../../../icebg.png';
import greenice from "../../../greennepalice.png";
import whiteice from "../../../premnepalice.png";
import orangeice from "../../../orangeice.png";
import orangecan from "../../../orangecan.png";

const NepalIce = () => {
  const [scrolled, setScrolled] = useState(false);

 

  return (
    <div className={`nepal-ice-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="row no-gutters-nepalice">
          <div
            className={`col-md-4 ${
              scrolled ? "full-width-logo" : "content-text-nepalice"
            }`}
          >
            <div className="image-logo-div-nepalice">
              <img
                src={logonepalice}
                className="image-logo-nepalice"
                alt="Nepal Ice Logo"
              />
            </div>
            
              <p>
                Brewed with the finest quality ingredients, Nepal Ice Premium
                has a unique taste that is sure to impress. This domestic beer
                has a volume of 650ML, making it the perfect choice for sharing
                with friends or enjoying on your own. Nepal Ice Premium has a
                well-balanced flavour that is neither too bitter nor too sweet,
                making it a great choice for those who enjoy a lighter beer. The
                beer has a smooth and refreshing taste that is perfect for those
                hot summer days or after a long day at work. Brewed in Nepal,
                Nepal Ice Premium is a great way to experience the taste of the
                local culture.
              </p>
            
          </div>
          
            <div className="col-md-8 img-kolom">
              <img src={nepalicebg} className="nepal-ice-bg" alt="Background" />
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
                  <Link to="/productshowcase?category=beer">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                  <div className="img-div-card-ice">
                    <img
                      src={icecan}
                      className="icecan-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={greenice}
                      className="ice-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-ice"
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
                <div className="img-div-card-ice">
                    <img
                      src={whiteice}
                      className="icecan-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={iceimg}
                      className="ice-prod-img-card"
                      alt="Product"
                    />
                       <img
                      src={bgrandomice}
                      className="bg-random-ice2"
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
                  <Link to="/productshowcase?category=beer">
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
                  <Link to="/productshowcase?category=beer">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                <div className="img-div-card-ice">
                    <img
                      src={orangecan}
                      className="icecan-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={orangeice}
                      className="ice-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-ice3"
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

export default NepalIce;
