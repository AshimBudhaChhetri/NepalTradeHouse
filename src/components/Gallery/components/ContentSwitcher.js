import React, { useState, useEffect } from "react";
import "./ContentSwitcher.css";
import axios from "axios";
import { Link } from "react-router-dom";
import bgrandomice from "../../../icebg.png";

const API_URL = process.env.REACT_APP_API_URL;

const ContentSwitcher = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch top categories (like Beer, Spirits)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories`);
        setCategories(response.data);
        if (response.data.length > 0) {
          setActiveCategory(response.data[0]);
          setBackgroundImage(
            `${API_URL}${response.data[0].image.replace(/\\/g, "/")}`
          );
        }
      } catch (error) {
        console.error("Error fetching categories:", error.message);
        alert("Failed to fetch categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch product categories for the selected top category
  useEffect(() => {
    const fetchProducts = async () => {
      if (activeCategory) {
        setLoading(true);
        try {
          const response = await axios.get(
            `${API_URL}/product_categories/category/${activeCategory.id}`
          );
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error.message);
          alert("Failed to fetch products. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [activeCategory]);

  const handleSectionChange = (category) => {
    setActiveCategory(category);
    setBackgroundImage(`${API_URL}${category.image.replace(/\\/g, "/")}`);
    setIsModalOpen(false);
  };

  return (
    <div className={`content-switcher ${loading ? "blur-background" : ""}`}>
      {loading ? (
        <div className="loading-news">
          <div className="loader">
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
          </div>
        </div>
      ) : (
        <>
          {/* Background Section */}
          <div className="container-fluid">
            <div className="row no-gutters-content">
              <div className="col-md-4 content-text">
                <h1 className="product-title">{activeCategory?.name}</h1>
                {activeCategory?.description && (
                  <p className="category-description">
                    {activeCategory.description}
                  </p>
                )}
              </div>
              <div className="col-md-8 p-0 img-kolom">
                <img
                  src={backgroundImage}
                  className="content-bg"
                  alt="Background"
                />
              </div>
            </div>
          </div>

          {/* Product Cards Section */}
          <div className="container my-5">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={product.id}
                  className={`row card-container ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="col-md-9 card-desc">
                    <h5 className="card-title-prod">{product.title}</h5>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">{product.description}</p>
                    <img
                      src={bgrandomice}
                      className="bg-random"
                      alt="Background"
                    />
                    <Link
                      to={`/productshowcase?topCategory=${activeCategory.id}&productCategory=${product.id}`}
                    >
                      <button className="button-gallery">
                        <span className="Wwp-span">Shop Now</span>
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <div className="product-img-div">
                      <img
                        src={`${API_URL}${product.image}`}
                        className="product-img"
                        alt={product.title}
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for this category</p>
            )}
          </div>

          {/* Sticky Navbar with Modal */}
          <div className="navbar-gallery">
            <button
              className="view-products-btn"
              onClick={() => setIsModalOpen(true)}
            >
              View Other Products
            </button>
          </div>

          {isModalOpen && (
            <div className="category-modal-overlay">
              <div className="category-modal-content">
                <button
                  className="category-modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-modal-button ${
                      activeCategory?.id === category.id ? "active" : ""
                    }`}
                    onClick={() => handleSectionChange(category)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContentSwitcher;
