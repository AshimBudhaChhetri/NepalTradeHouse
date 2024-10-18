import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductShowcase.css";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductShowcase = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const topCategoryId = query.get("topCategory"); // Get the topCategory ID from the URL query
  const productCategoryId = query.get("productCategory"); // Get the productCategory ID from the URL query

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch products for a top category
  const fetchProductsForTopCategory = async (topCategoryId) => {
    try {
      setLoading(true);
      const productCategoriesResponse = await axios.get(
        `${API_URL}/product_categories/category/${topCategoryId}`
      );
      const productCategories = productCategoriesResponse.data;

      let allProducts = [];
      for (let productCategory of productCategories) {
        const productsResponse = await axios.get(
          `${API_URL}/products/category/${productCategory.id}`
        );
        allProducts = [...allProducts, ...productsResponse.data];
      }

      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setLoading(false);
      alert("Failed to fetch products. Please try again.");
    }
  };

  // Fetch top categories for the modal and set initial category from the query
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories`);
        setCategories(response.data);

        if (response.data.length > 0) {
          const initialCategory =
            response.data.find(
              (category) => category.id === Number(topCategoryId)
            ) || response.data[0];
          fetchProductsForTopCategory(initialCategory.id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error.message);
        alert("Failed to fetch categories. Please try again.");
      }
    };

    fetchCategories();
  }, [topCategoryId]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCategorySwitch = (categoryItem) => {
    fetchProductsForTopCategory(categoryItem.id);
    navigate(`/productshowcase?topCategory=${categoryItem.id}`);
    setIsModalOpen(false);
  };

  return (
    <div className="container productshowcase">
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
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-4 col-lg-3 mb-4">
                <div className="card h-100 text-center">
                  <div className="image-product-div">
                    <img
                      src={`${API_URL}${product.image}`}
                      className="card-img-top"
                      alt={product.name}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">
                      Description: {product.description}
                    </p>
                    <Link
                      to={`/productshowcase?topCategory=${topCategoryId}&productCategory=${product.id}`}
                      className="btn btn-primary"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for this category</p>
          )}
        </div>
      )}

      {/* Modal Trigger */}
      <div className="product-modal-navbar">
        <button className="product-modal-view-btn" onClick={toggleModal}>
          View Other Items
        </button>
      </div>

      {/* Modal for showing top categories */}
      {isModalOpen && (
        <div className="product-modal-overlay">
          <div className="product-modal-content">
            {categories.length > 0 ? (
              categories.map((categoryItem) => (
                <button
                  key={categoryItem.id}
                  onClick={() => handleCategorySwitch(categoryItem)} // Switch to this category and fetch its products
                  className={
                    topCategoryId === String(categoryItem.id) ? "active" : ""
                  }
                >
                  {categoryItem.name}
                </button>
              ))
            ) : (
              <p>No categories available</p>
            )}
            <button onClick={toggleModal} className="product-modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
