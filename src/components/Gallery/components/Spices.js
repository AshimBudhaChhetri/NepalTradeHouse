import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Spices.css";
import logokhuk from "../../../logokhuk.png";
import rumbg from "../../../rumbg1.jpg";
import whiterum from "../../../whiterum.png";
import redkhuk from "../../../redkhuk.png";
import spicedkhuk from "../../../rumprod.png";
import corkhuk from "../../../corkhuk.png";
import bgrandomice from '../../../icebg.png';

// Array of product data
const khukriProducts = [
  {
    id: 1,
    title: "KHUKRI WHITE RUM",
    category: "Rum",
    country: "Nepal",
    alcohol: "40%",
    description: "Khukri White is a complex yet light white rum, presenting delicate notes of tropical fruits with rich nutty undertones and a creamy character. This makes Khukri White Rum perfect for sipping neat or mixing in cocktails.",
    image: whiterum,
    order: 'normal',
  },
  {
    id: 2,
    title: "KHUKRI XXX RUM",
    category: "Rum",
    country: "Nepal",
    alcohol: "40%",
    description: "Born in the Himalayas, Khukri XXX Rum is an exceptional dark blend, distilled with rich molasses, Himalayan spring water, and natural artisanal flavours. Every sip delivers a complex taste with rich natural flavours and a smooth, long caramel finish.",
    image: redkhuk,
    order: 'reversed',
  },
  {
    id: 3,
    title: "KHUKRI SPICED RUM",
    category: "Rum",
    country: "Nepal",
    alcohol: "42.8%",
    description: "Flavours extracted from authentic Nepalese spices are blended with molasses and fresh spring water from the Himalayas. Aged in wooden casks at high altitudes, Khukri Spiced Rum delivers a sweet, smooth, and long finish.",
    image: spicedkhuk,
    order: 'normal',
  },
  {
    id: 4,
    title: "KHUKRI CORONATION",
    category: "Rum",
    country: "Nepal",
    alcohol: "42.8%",
    description: "Created in honour of King Birendra's coronation, Coronation Khukri is packed in a unique bottle shaped like a Khukri, Nepal's national symbol. Every bottle is a reminder of Nepal's rich heritage.",
    image: corkhuk,
    order: 'reversed',
  },
 
];

const Khukri = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={`khukri-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Logo and introduction */}
        <div className="row no-gutters-khukri">
          <div className={`col-md-4 ${scrolled ? "full-width-logo" : "content-text-khukri"}`}>
            <div className="image-logo-div-khukri">
              <img src={logokhuk} className="image-logo-khukri" alt="Khukri Logo" />
            </div>
            <p>
              Nepal Distilleries Private Limited started producing Khukri Rum in 1959 in Kathmandu, Nepal. Initially, the company started distilling alcohol from pot stills. Distilled from fermented molasses, the Khukri Rum is aged for a minimum of eight months in wooden vats. 
              Khukri Rum comes in four varieties; Khukri XXX Rum, Coronation Khukri XXX Rum, Khukri White Rum, and Khukri Spiced Rum, all with alcohol content of 42.8%. Every sip delivers a complex taste with rich natural flavours, earthy undertones, and a smooth caramel finish.
            </p>
          </div>
          <div className="col-md-8 p-0 img-kolom">
            <img src={rumbg} className="khukri-bg" alt="Background" />
          </div>
        </div>

        {/* Product Cards */}
        {khukriProducts.map((product) => (
          <div key={product.id} className={`row card-container-khukri ${product.order === 'reversed' ? 'flex-row-reverse' : ''}`}>
            <div className="col-md-9 card-desc-khukri">
              <h1 className="card-title-prod">{product.title}</h1>
              <p className="card-category">Category: {product.category}</p>
              <p className="card-category">Country: {product.country}</p>
              <p className="card-category">Alcohol: {product.alcohol}</p>
              <p className="card-text-prod">{product.description}</p>
              <img src={bgrandomice} className="bg-random-khukri" alt="Background" />
              <Link to="/productshowcase?category=rum">
                <button className="button-gallery">
                  <span className="Wwp-span">Shop Now</span>
                </button>
              </Link>
            </div>
            <div className="col-md-3">
              <div className="product-img-div">
                <img src={product.image} className="khukri-prod-img-card" alt="Product" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Khukri;
