import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css';
import reviewtitlediv from "../../../qqq.png";
const API_URL = process.env.REACT_APP_API_URL;

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${API_URL}/reviews`);
        const updatedReviews = response.data.map(review => ({
          img: `${API_URL}${review.image.replace(/\\/g, '/')}`,  // Adjust the image path
          msg: review.description,  // Map description to msg
          name: review.name,  // Map the name
        }));
        setReviews(updatedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
        alert("Failed to fetch reviews. Please try again.");
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards side by side
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides side by side for larger devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='outer-main-div'>
      <div className="review-slider">
        <img src={reviewtitlediv} className='title-review-img' alt="Review Title" />
        <h2 className="review-title">
          What Our <span className="review-title-highlight">Customers</span> Say?
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card-wrapper">
              <div className="review-card">
                <div className="img-review-div">
                  <img src={review.img} alt={review.name} className="review-img" />
                </div>
                <div className="content-review">
                  <p className="review-msg">"{review.msg}"</p>
                  <p className="review-name">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
