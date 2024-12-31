import React from "react";
import Home from "./Pages/home";
import Shop from "./Pages/shop";
import About from "./Pages/about";
import Contact from "./Pages/Contact";
import Features from "./Pages/features";
import Product_detail from "./Pages/product_detail";
import Blog_Detail from "./Pages/Blog_Detail";
import Blog from "./Pages/Blog";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Blog_Detail" element={<Blog_Detail />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product_detail" element={<Product_detail />} />
      </Routes>
    </Router>
  );
}

export default App;
