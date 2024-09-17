import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css';
import ungkaet from '../../../ungkait.jpg'; // Replace with the correct path to your image
import namche from '../../../namchepic.jpg';
import reviewtitlediv from "../../../qqq.png";

const reviews = [
  {
    img: namche,
    msg: 'Discover the unique taste of Khukri Rum, a premium Nepalese rum known for its smooth, rich flavor. Perfect for crafting exquisite, spicy cocktails, Khukri Rum shines in every glass.',
    name: 'Namche Amsterdam',
  },
  {
    img: ungkaet,
    msg: "Bought some organic tea from this site, and it's simply amazing. The flavor is rich and refreshing.",
    name: 'Ankit',
  },
 
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 reviews on larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 review on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='outer-main-div'>
    <div className="review-slider">
        <img src={reviewtitlediv} className='title-review-img' />
      <h2 className="review-title">
        What Our <span className="review-title-highlight">Customers</span> Say?
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="col-md-6 mb-4"> {/* Add margin bottom to create gap */}
            <div className="review-card row mx-1"> {/* Use row for content alignment */}
              <div className="col-md-4 img-review-div">
                <img src={review.img} alt={review.name} className="review-img" />
              </div>
              <div className="col-md-8 content-review">
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
