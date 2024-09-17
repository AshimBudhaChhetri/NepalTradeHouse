import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Khukri.css";
import logokhuk from "../../../logokhuk.png"
import rumbg from "../../../rumbg1.jpg"
import iceimg from "../../../nepaliceprod.png";
import icecan from "../../../cannepalice.png"
import bgrandomice from '../../../icebg.png';
import greenice from "../../../greennepalice.png";
import whiteice from "../../../premnepalice.png";
import orangeice from "../../../orangeice.png";
import orangecan from "../../../orangecan.png";
import whiterum from "../../../whiterum.png";
import redkhuk from "../../../redkhuk.png";
import spicedkhuk from "../../../rumprod.png";
import corkhuk from "../../../corkhuk.png";

const Khukri = () => {
  const [scrolled, setScrolled] = useState(false);

  
  return (
    <div className={`khukri-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="row no-gutters-khukri">
          <div
            className={`col-md-4 ${
              scrolled ? "full-width-logo" : "content-text-khukri"
            }`}
          >
            <div className="image-logo-div-khukri">
              <img
                src={logokhuk}
                className="image-logo-khukri"
                alt="Khukri Logo"
              />
            </div>
         
              <p>
                Nepal Distilleries Private Limited started producing Khukri Rum in 1959 in Kathmandu, Nepal. Initially the company started distilling alcohol from pot stills. Those initial pot stills are on display in its factory premises and the company now uses three fractionating columns for distillation of alcohol. Distilled from fermented molasses, the Khukri Rum is aged for a minimum of eight months in wooden vats. 
Khukri Rum is a Nepalese oak vatted dark rum launched in 1959. Khukri Rum comes in four varieties; Khukri XXX Rum, Coronation Khukri XXX Rum, Khukri White Rum and Khukri Spiced Rum. All variants are matured for a minimum of eight months and have alcohol content of 42.8%.
Aged among snowy peaks in casks born from the region-exclusive Shorea Robusta tree, every sip of Khukri XXX Rum delivers a complex taste with rich natural flavours, earthy undertones and a smooth, long caramel finish.
Spices used in Khukri Spice Rum are hand-picked in the Himalayas, and include cloves, cardamom and cinnamon.
              </p>
         
          </div>
       
            <div className="col-md-8 img-kolom">
              <img src={rumbg} className="khukri-bg" alt="Background" />
            </div>
        

       
          
        </div>
        {/* Scroll Down Indicator */}
     
        
   

          <div>
            <div className="col-md-12">
              <div className="card-style-1 first-card ">
                <div className="card-left">
                  <h1 className="card-title-prod">KHUKRI WHITE RUM</h1>
                  <p className="card-category">Category: Rum</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 40%</p>
                  <p className="card-text-prod">
                  Khukri White is a complex yet light white rum.
Presenting delicate notes of tropical fruits with rich nutty undertones and a creamy character, Khukri White is charcoal filtered for an extra smooth taste.
This makes Khukri White Rum perfect for sipping neat or mixing in cocktails.
                  </p>
                  <Link to="/productshowcase?category=rum">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                  <div className="img-div-card-khukri">
                   
                    <img
                      src={whiterum}
                      className="khukri-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-khukri"
                      alt="Product"
                    />
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
 
    
          <div>
            <div className="col-md-12">
              <div className="card-style-1">
                <div className="card-right">
                <div className="img-div-card-khukri">
                    
                    <img
                      src={redkhuk}
                      className="khukri-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-khukri2"
                      alt="Product"
                    />
                    
                    
                    
                    
                  </div>
                </div>
                <div className="card-left">
                  <h1 className="card-title-prod">KHUKRI XXX RUM</h1>
                  <p className="card-category">Category: Rum</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 40%</p>
                  <p className="card-text-prod">
                  Born in the Himalayas, Khukri XXX Rum is an exceptional dark blend, distilled with rich molasses, Himalayan spring water, and natural artisanal flavours.
                  Aged among snowy peaks in casks born from the region-exclusive Shorea Robusta tree, every sip of Khukri XXX Rum delivers a complex taste with rich natural flavours, earthy undertones and a smooth, long caramel finish.
                  </p>
                  <Link to="/productshowcase?category=rum">
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
                  <h1 className="card-title-prod">KHUKRI SPICED RUM</h1>
                  <p className="card-category">Category: Rum</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 42.8%</p>
                  <p className="card-text-prod">
                  Flavours that are extracted from authentic Nepalese spices are masterfully blended with distills of rich molasses and fresh spring water from the Himalayas.
                  It is then aged in homes of exclusive wooden casks at high altitudes resulting in a tasteful concoction of assorted spices enriched with dry fruits that ends with a sweet, smooth and long finish.
                  </p>
                  <Link to="/productshowcase?category=rum">
                  <button className="button-Wwp">
                    <span className="Wwp-span">Shop Now</span>
                  </button>
                  </Link>
                </div>
                <div className="card-right">
                <div className="img-div-card-khukri">
                    
                    <img
                      src={spicedkhuk}
                      className="khukri-prod-img-card"
                      alt="Product"
                    />
                    <img
                      src={bgrandomice}
                      className="bg-random-khukri3"
                      alt="Product"
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

   
          <div>
            <div className="col-md-12">
              <div className="card-style-1">
                <div className="card-right">
                <div className="img-div-card-khukri">
                  
                    <img
                      src={corkhuk}
                      className="khukri-prod-img-card cor-img"
                      alt="Product"
                    />
           
                   
                    <img
                      src={bgrandomice}
                      className="bg-random-khukri4"
                      alt="Product"
                    />
                    
                    
                    
                    
                  </div>
                </div>
                <div className="card-left">
                  <h1 className="card-title-prod">KHUKRI CORONATION</h1>
                  <p className="card-category">Category: Rum</p>
                  <p className="card-category">Country: Nepal</p>
                  <p className="card-category">Alcohol: 42.8%</p>
                  <p className="card-text-prod">
                  This selected reserve was created in honour and respect on the prestigious occasion of Late King Birendra Bir Bikram Shah Dev's Coronation ceremony in 1974 and names it as Coronation Khukri.
It is packed in a unique bottle shaped like a Khukri, which is a national symbol of pride, bravery and elegance.
As one of the honorary guests invited to the ceremony, the first Coronation Khukri was gifted to the King in his honour.
                  </p>
                  <Link to="/productshowcase?category=rum">
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

export default Khukri;
