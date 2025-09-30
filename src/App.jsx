import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ForHim from './pages/ForHim';
import ForHer from './pages/ForHer';
import AllProducts from './pages/AllProducts';
import GiftSets from './pages/GiftSets';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import OurStory from './pages/OurStory';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';

// --- ADD THIS IMPORT ---
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-him" element={<ForHim />} />
        <Route path="/for-her" element={<ForHer />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/gift-sets" element={<GiftSets />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        {/* --- UPDATE THIS ROUTE --- */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;