import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TeaCoffee.css";
import bgrandomice from '../../../icebg.png';
import logospices from "../../../centurylogo.png";
import spicesbg from "../../../spicesbg.jpg";
import coffee1 from "../../../coffee1.png";
import coffee2 from "../../../coffee2.png";
import coffee3 from "../../../coffee3.png";
import coffee4 from "../../../coffee4.png";
import coffee5 from "../../../coffee5.png";
import coffee6 from "../../../coffee6.png";

const teaCoffeeProducts = [
  {
    id: 1,
    title: "SUBSCRIPTION NEPAL",
    description: "Our coffee from Nepal is mild, with a creamy, full (after)taste. In this specialty coffee, you will find notes of fruit and nuts. This 100% Arabica grows at an altitude of 1200-1400 meters, in the mountainous district of Lamjung.",
    image: coffee1,
    order: 'normal',
  },
  {
    id: 2,
    title: "NEPAL AND COSTA RICA",
    description: "Nepal meets Costa Rica! A delicious combination of our coffee from Nepal with an honest quality coffee from Costa Rica. The combination of the mild taste from Nepal with the deeper taste of the Caturra from Costa Rica provides a delicious aftertaste.",
    image: coffee2,
    order: 'reversed',
  },
  {
    id: 3,
    title: "DARK ROAST",
    description: "Nepal meets the world! A delicious combination of our coffee from Nepal combined with an honest quality coffee from one of our other origins. The dark roast coffee beans from 80 Days are for the coffee drinker who loves a spicy espresso.",
    image: coffee3,
    order: 'normal',
  },
  {
    id: 4,
    title: "NEPAL AND PERU",
    description: "A delicious combination of our coffee from Nepal with an honest quality coffee from Peru. The combination of the mild taste from Nepal with the deeper taste of the Churupampa delivers a delicious aftertaste with notes of orange blossom.",
    image: coffee4,
    order: 'reversed',
  },
  {
    id: 5,
    title: "NEPAL AND NICARAGUA",
    description: "A delicious combination of our coffee from Nepal with an honest quality coffee from Nicaragua. The combination of the mild coffee taste from Nepal with a somewhat spicier taste produces a very tasty coffee.",
    image: coffee5,
    order: 'normal',
  },
  {
    id: 6,
    title: "NEPAL AND ETHIOPIA",
    description: "A surprisingly sweet dance between our coffee from Nepal with a (h)onest quality coffee from Ethiopia. The combination of the mild taste from Nepal with the floral and complex fruit tones of the Galeh from Ethiopia produces a delicious aftertaste.",
    image: coffee6,
    order: 'reversed',
  },
  
];

const TeaCoffee = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={`tc-content ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="row no-gutters-tc">
          <div
            className={`col-md-4 ${scrolled ? "full-width-logo" : "content-text-tc"}`}
          >
            <div className="image-logo-div-tc">
              <img src={logospices} className="image-logo-tc" alt="tc Logo" />
            </div>
            <p>
              {/* Text content */}
              Century Garam Masala is a pack of traditional spice blend used in everyday cooking. Century Garam Masala adds aroma and flavor to any dish, to raise its taste exponentially. Century's perfect mixes of herbs and spices to make your cuisine more special.


Century Group of Companies’ extensive portfolio comprises of Dugar Spices & Food Products Pvt. Ltd., National Polymer & Chemical Industries, Asia Chem Pvt. Ltd., National Pipe Industry, Amit Enterprises, New Saurav Impex, Asian Life Insurance Co. Ltd., Hotel Harrison Palace Pvt. Ltd., Fun & Food Village Resort and Centurian Hotel (RAMADA) & Malls Pvt. Ltd.
Century Group is a firm advocate of sustainable growth and is committed to its role as a responsible corporate conglomerate. At the heart of our success are the communities in which we live and work, and we are ever eager to give back to them through different Corporate Social Responsibility initiatives.

Our vision is not only to grow our business ethically but also to consistently work towards satisfying our valued customers, whether it is through our products or our services.
Century is driven by a constant zeal of coming up with new and exciting products that help us stay at the top. Maintaining brand trust and loyalty is our primary objective as we continue to deliver only the best.
            </p>
          </div>
          <div className="col-md-8 p-0 img-kolom">
            <img src={spicesbg} className="tc-bg" alt="Background" />
          </div>
        </div>

        {/* Products Section */}
        {teaCoffeeProducts.map((product) => (
          <div key={product.id} className={`row card-container-tc ${product.order === 'reversed' ? 'flex-row-reverse' : ''}`}>
            <div className="col-md-9 card-desc">
              <h1 className="card-title-prod">{product.title}</h1>
              <p className="card-text-prod">{product.description}</p>
              <Link to="/productshowcase?category=cof">
                <button className="button-gallery">
                  <span className="Wwp-span">Shop Now</span>
                </button>
              </Link>
              <img src={bgrandomice} className="bg-random-tc" alt="Background" />
            </div>
            <div className="col-md-3">
              <img src={product.image} className="tc-prod-img-card" alt="Product" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaCoffee;
