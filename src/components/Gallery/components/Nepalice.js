import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nepalice.css";
import logonepalice from "../../../nepalicelogo.png";
import nepalicebg from "../../../nepalicebg1.jpg";
import icecan from "../../../cannepalice.png";
import greenice from "../../../greennepalice.png";
import whiteice from "../../../nepaliceprod.png";
import orangeice from "../../../orangeice.png";
import orangecan from "../../../orangecan.png";
import bgrandomice from '../../../icebg.png';
import preicecan from '../../../premnepalice.png';

const nepalIceProducts = [
  {
    id: 1,
    title: "NEPAL ICE NATURA",
    category: "Beer / Domestic Beer",
    country: "Nepal",
    alcohol: "5%",
    description: "Nepal Ice Natura is the Nepal's first barley beer made from 100% Natural Barley. This type of barley beer is manufactured by few selected World Class Companies in the world and CG Brewery has joined this elite club to offer Nepalese Consumers unique experience of drinking this type of beer which makes use of Natural Barley. Being a product which is made from Natural Barley, Nepal Ice Natura beer has unique pleasant taste and mouth feel.",
    images: [icecan, greenice],
    order: 'normal',
  },
  {
    id: 2,
    title: "NEPAL ICE PREMIUM",
    category: "Beer / Domestic Beer",
    country: "Nepal",
    alcohol: "5%",
    description: "Nepal Ice Premium is brewed with the finest quality ingredients and has a well-balanced flavour that is neither too bitter nor too sweet. The beer has a smooth and refreshing taste that is perfect for those hot summer days.",
    images: [preicecan ,whiteice],
    order: 'reversed',
  },
  {
    id: 3,
    title: "NEPAL ICE STRONG",
    category: "Beer / Domestic Beer",
    country: "Nepal",
    alcohol: "40%",
    description: "Nepal Ice Strong offers a unique pleasant taste and mouth feel. It is brewed from 100% natural barley, giving it a distinct flavor perfect for those who enjoy a strong beer.",
    images: [orangecan, orangeice],
    order: 'normal',
  },
];

const NepalIce = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={`nepal-ice-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        {/* Logo and intro section */}
        <div className="row no-gutters-nepalice">
          <div className={`col-md-4 ${scrolled ? "full-width-logo" : "content-text-nepalice"}`}>
            <div className="image-logo-div-nepalice">
              <img src={logonepalice} className="image-logo-nepalice" alt="Nepal Ice Logo" />
            </div>
            <p>
              Brewed with the finest quality ingredients, Nepal Ice Premium has a unique taste that is sure to impress. This domestic beer has a volume of 650ML, making it the perfect choice for sharing with friends or enjoying on your own. Nepal Ice Premium has a well-balanced flavour that is neither too bitter nor too sweet, making it a great choice for those who enjoy a lighter beer. The beer has a smooth and refreshing taste that is perfect for those hot summer days or after a long day at work. Brewed in Nepal, Nepal Ice Premium is a great way to experience the taste of the local culture.
            </p>
          </div>
          <div className="col-md-8 p-0 img-kolom">
            <img src={nepalicebg} className="nepal-ice-bg" alt="Background" />
          </div>
        </div>

        {/* Product cards */}
        {nepalIceProducts.map((product) => (
          <div key={product.id} className={`row card-container-nepalice ${product.order === 'reversed' ? 'flex-row-reverse' : ''}`}>
            <div className="col-md-9 card-desc-nepalice">
              <h1 className="card-title-prod">{product.title}</h1>
              <p className="card-category">Category: {product.category}</p>
              <p className="card-category">Country: {product.country}</p>
              <p className="card-category">Alcohol: {product.alcohol}</p>
              <p className="card-text-prod">{product.description}</p>
              <Link to="/productshowcase?category=beer">
                <button className="button-gallery">
                  <span className="Wwp-span">Shop Now</span>
                </button>
              </Link>
              <img src={bgrandomice} className="bg-random-nepalice" alt="Background" />
            </div>
            <div className="col-md-3 col-sm-">
              <div className="product-img-div">
                {/* Rendering the larger image */}
                <img src={product.images[1]} className="nepalice-prod-img-card" alt="Product" />
                {/* Rendering the smaller can image */}
                <img src={product.images[0]} className="nepalice-can-img" alt="Can" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NepalIce;
