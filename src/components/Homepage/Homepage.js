import React from 'react';

import Wwp from "./components/Wwp";
import About from "./components/About";
import Review from './components/Review';
import Save from './components/Save';
import NavbarComponent from './components/NavbarComponent';
import BasicExample from './components/BasicExample';
import Footer from './components/Footer';
import Wcu from './components/Wcu';

const Homepage = () => {
  return (
    <div>
        <BasicExample />
        <Wwp />
        <About />
        <Wcu />
      <Review />
     
      
      
      
    </div>
  )
}

export default Homepage
