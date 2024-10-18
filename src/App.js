// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cs from "./components/cs";

import Footer from "./components/Homepage/components/Footer";
import NavbarComponent from "./components/Homepage/components/NavbarComponent"; // Ensure correct path
import Homepage from "./components/Homepage/Homepage";
import Gallery from "./components/Gallery/Gallery";
import ProductShowcase from "./components/Gallery/components/listing/ProductShowcase";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component
import Aboutpage from "./components/Aboutpage/Aboutpage";
import NewsEvent from "./components/news/News";

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/productshowcase" element={<ProductShowcase />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cs" element={<Cs />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/newsevent" element={<NewsEvent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
