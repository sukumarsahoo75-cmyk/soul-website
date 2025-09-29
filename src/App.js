import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ADD THIS IMPORT
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import ForHim from './pages/ForHim';
import ForHer from './pages/ForHer';
import GiftSets from './pages/GiftSets';
import AllProducts from './pages/AllProducts';
import ContactUs from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ADD THIS LINE */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/for-him" element={<ForHim />} />
          <Route path="/for-her" element={<ForHer />} />
          <Route path="/gift-sets" element={<GiftSets />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;