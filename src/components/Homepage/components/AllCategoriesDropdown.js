import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "./AllCategoriesDropdown.css";

const AllCategoriesDropdown = ({ dropDirection = "down" }) => {
  const [categories, setCategories] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});
  const [activeTitle, setActiveTitle] = useState("Top Categories");
  const [activeCategory, setActiveCategory] = useState(null);
  const [productCategories, setProductCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const timeoutRef = useRef(null); // Reference to store timeout

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories`);
        setCategories(response.data);
        groupCategoriesByTitle(response.data);
        const defaultGroup = response.data.filter(
          (cat) => cat.title === "Top Categories"
        );
        if (defaultGroup.length > 0) {
          handleCategoryClick(defaultGroup[0]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [API_URL]);

  const groupCategoriesByTitle = (categories) => {
    const grouped = categories.reduce((acc, category) => {
      if (!acc[category.title]) {
        acc[category.title] = [];
      }
      acc[category.title].push(category);
      return acc;
    }, {});
    setGroupedCategories(grouped);
  };

  const handleTitleClick = (title) => {
    setActiveTitle(title);
    const selectedGroup = groupedCategories[title];
    if (selectedGroup && selectedGroup.length > 0) {
      handleCategoryClick(selectedGroup[0]);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    fetchProductCategories(category.id);
  };

  const fetchProductCategories = async (categoryId) => {
    try {
      const response = await axios.get(
        `${API_URL}/product_categories/category/${categoryId}`
      );
      setProductCategories(response.data);
    } catch (error) {
      console.error("Error fetching product categories:", error);
    }
  };

  const handleImageClick = (productCategory) => {
    navigate(
      `/productshowcase?topCategory=${activeCategory.id}&productCategory=${productCategory.id}`
    );
  };

  const handleDropdownEnter = () => {
    // Clear any existing timeout to prevent the dropdown from closing
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    // Set a timeout to delay the closing of the dropdown
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 1000); // Keep the dropdown active for 1 second after hover
  };

  // Cleanup the timeout on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Dropdown
      className="sticky-dropdown"
      drop={dropDirection}
      show={showDropdown}
      onMouseEnter={handleDropdownEnter}
      onMouseLeave={handleDropdownLeave}
    >
      <Dropdown.Toggle variant="link" className="nav-link">
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu className="sticky-dropdown-menu">
        <div className="hero-navbar-dropdown">
          <div className="hero-dropdown-content">
            <div className="hero-dropdown-column hero-title-column">
              {["Top Categories", "Gift", "Services"].map((title) => (
                <div
                  key={title}
                  className={`hero-dropdown-title ${
                    activeTitle === title ? "active" : ""
                  }`}
                  onClick={() => handleTitleClick(title)}
                >
                  {title}
                </div>
              ))}
            </div>

            <div className="hero-dropdown-column hero-items-column">
              {groupedCategories[activeTitle]?.map((category) => (
                <div
                  key={category.id}
                  className={`hero-dropdown-item ${
                    activeCategory?.id === category.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name}
                </div>
              ))}
            </div>

            <div className="hero-dropdown-column hero-images-column">
              {activeCategory && productCategories.length > 0 && (
                <>
                  {productCategories.map((productCategory) => (
                    <div
                      key={productCategory.id}
                      className="hero-dropdown-image-wrapper"
                      onClick={() => handleImageClick(productCategory)}
                    >
                      <img
                        src={`${API_URL}${productCategory.image}`}
                        alt={productCategory.title}
                        className="hero-dropdown-image"
                      />
                      <span>{productCategory.title}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AllCategoriesDropdown;
