import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductShowcase.css';
import ru from '../../../../rumprod.png';
import niorange from "../../../../orangeice.png";
import niogreen from "../../../../greennepalice.png";
import ni from '../../../../nepaliceprod.png';
import cen from '../../../../centuryprod.jpg';
import cof from '../../../../coffeeprod.png';
import nican from "../../../../cannepalice.png";
import rured from "../../../../redkhuk.png";
import ruwhite from "../../../../whiterum.png";
import wucork from "../../../../corkhuk.png";
import orangecan from "../../../../orangecan.png";
import premnepalice from "../../../../premnepalice.png";

const khukriProducts = [
  { id: 1, name: 'Khukuri Spiced Rum', size: '750 ml', price: 'XXXX', imageUrl: ru },
  { id: 2, name: 'Khukri XXX Rum', size: '750 ml', price: 'XXXX', imageUrl: rured },
  { id: 3, name: 'Khukuri White Rum', size: '750 ml', price: 'XXXX', imageUrl: ruwhite },
  { id: 4, name: 'Khukuri Coronation', size: '750 ml', price: 'XXXX', imageUrl: wucork },
 
];

const nepalIceProducts = [
  { id: 5, name: 'Nepal Ice Premium', size: '650 ml', price: 'XXXX', imageUrl: ni },
  { id: 6, name: 'Nepal Ice Strong', size: '650 ml', price: 'XXXX', imageUrl: niorange },
  { id: 7, name: 'Nepal Ice Natura', size: '650 ml', price: 'XXXX', imageUrl: niogreen },
  { id: 8, name: 'Nepal Ice Natura', size: '650 ml', price: 'XXXX', imageUrl: nican },
  { id: 9, name: 'Nepal Ice Strong', size: '650 ml', price: 'XXXX', imageUrl: orangecan },
  { id: 10, name: 'Nepal Ice Strong', size: '650 ml', price: 'XXXX', imageUrl: premnepalice },
  
];

const centuryProducts = [
  { id: 11, name: 'Century', size: '650 ml', price: 'XXXX', imageUrl: cen },
  { id: 12, name: 'Century', size: '650 ml', price: 'XXXX', imageUrl: cen },
  { id: 13, name: 'Century', size: '650 ml', price: 'XXXX', imageUrl: cen },
  { id: 14, name: 'Century', size: '650 ml', price: 'XXXX', imageUrl: cen },
  { id: 15, name: 'Century', size: '650 ml', price: 'XXXX', imageUrl: cen }
];

const coffeeProducts = [
  { id: 16, name: '88 Coffee', size: '650 ml', price: 'XXXX', imageUrl: cof },
  { id: 17, name: '88 Coffee', size: '650 ml', price: 'XXXX', imageUrl: cof },
  { id: 18, name: '88 Coffee', size: '650 ml', price: 'XXXX', imageUrl: cof },
  { id: 19, name: '88 Coffee', size: '650 ml', price: 'XXXX', imageUrl: cof },
  { id: 20, name: '88 Coffee', size: '650 ml', price: 'XXXX', imageUrl: cof }
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductShowcase = () => {
  const query = useQuery();
  const category = query.get('category') || 'all';

  const getCategoryProducts = (category) => {
    switch (category) {
      case 'rum':
        return khukriProducts;
      case 'beer':
        return nepalIceProducts;
      case 'cen':
        return centuryProducts;
      case 'cof':
        return coffeeProducts;
      default:
        return [];
    }
  };

  const filteredProducts = getCategoryProducts(category);

  return (
    <div className="container productshowcase">
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 text-center">
              <div className='image-product-div'>
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.size}</p>
                <p className="card-text">Price Rs. {product.price}</p>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky-navbar">
        <div className='sticky-navbar-box'>
        <Link to="/productshowcase?category=rum">
          <button className={category === 'rum' ? 'active' : ''}>Khukri</button>
        </Link>
        <Link to="/productshowcase?category=beer">
          <button className={category === 'beer' ? 'active' : ''}>Nepal Ice</button>
        </Link>
        <Link to="/productshowcase?category=cen">
          <button className={category === 'cen' ? 'active' : ''}>Century</button>
        </Link>
        <Link to="/productshowcase?category=cof">
          <button className={category === 'cof' ? 'active' : ''}>Coffee</button>
        </Link>
        </div>
        
      </div>
      <div className="footer-placeholder"></div>
    </div>
  );
}

export default ProductShowcase;
