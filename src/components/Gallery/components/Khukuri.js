import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Khukri.css";
import logokhuk from "../../../logokhuk.png";
import rumbg from "../../../rumbg1.jpg";
import bgrandomice from '../../../icebg.png';
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Khukri = () => {
  const [scrolled, setScrolled] = useState(false);
  const [productCategories, setProductCategories] = useState([]);

  // Fetch product categories from the API
  const fetchProductCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/product_categories`);
      setProductCategories(response.data);
    } catch (error) {
      console.error("Error fetching product categories:", error.message);
      alert("Failed to fetch product categories. Please try again.");
    }
  };

  useEffect(() => {
    fetchProductCategories();
  }, []); // Fetch data when component mounts

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
        {productCategories.length > 0 ? productCategories.map((product) => (
          <div key={product.id} className="row card-container-khukri">
            <div className="col-md-9 card-desc-khukri">
              <h1 className="card-title-prod">{product.title}</h1>
              <p className="card-category">Quantity: {product.quantity}</p>
              <p className="card-text-prod">{product.description}</p>
              <img src={bgrandomice} className="bg-random-khukri" alt="Background" />
              <Link to="/productshowcase">
                <button className="button-gallery">
                  <span className="Wwp-span">Shop Now</span>
                </button>
              </Link>
            </div>
            <div className="col-md-3">
              <div className="product-img-div">
                <img
                  src={`${API_URL}${product.image}`} // Concatenate API_URL with the image path
                  className="khukri-prod-img-card"
                  alt={product.title}
                />
              </div>
            </div>
          </div>
        )) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Khukri;
