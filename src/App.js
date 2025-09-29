import React, { useEffect, useState } from "react";

// Simple SVG icons to replace lucide-react imports
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Array of background images
  const backgroundImages = [
    "/images/hero-bg.jpg",
    "/images/hero-bg2.jpg",
    "/images/hero-bg3.jpg"
  ];

  // Updated Product data with 5 products and new names
  const products = [
    {
      id: 1,
      name: "Mystic",
      description: "A fresh, modern fragrance with notes of citrus and amber.",
      price: 89.99,
      images: ["/images/product1.jpg", "/images/product1-alt1.jpg", "/images/product1-alt2.jpg"],
      category: "for-her"
    },
    {
      id: 2,
      name: "Blu",
      description: "A warm, woody fragrance with hints of vanilla and musk.",
      price: 94.99,
      images: ["/images/product2.jpg", "/images/product2-alt1.jpg", "/images/product2-alt2.jpg"],
      category: "for-him"
    },
    {
      id: 3,
      name: "Oud Intense",
      description: "A floral, elegant fragrance for a truly timeless feel.",
      price: 87.99,
      images: ["/images/product3.jpg", "/images/product3-alt1.jpg", "/images/product3-alt2.jpg"],
      category: "for-him"
    },
    {
      id: 4,
      name: "Her",
      description: "An intense, mysterious blend with oud and spice notes for the bold.",
      price: 109.99,
      images: ["/images/product4.jpg", "/images/product4-alt1.jpg", "/images/product4-alt2.jpg"],
      category: "for-her"
    },
    {
      id: 5,
      name: "Luxury Perfume Gift Set - 4 x 20ml",
      description: "Experience our signature collection with this exquisite gift set featuring four distinct fragrances.",
      price: 199.99,
      images: ["/images/product5.jpg", "/images/product5-alt1.jpg", "/images/product5-alt2.jpg"],
      category: "gift-sets"
    }
  ];

  useEffect(() => {
    setLoaded(true);
    
    // Set up the slideshow interval
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gold-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:flex-none md:justify-start">
            <img
              src="/images/logo.png"
              alt="SOUL Logo"
              className="w-[200px] md:w-[280px] lg:w-[320px] h-auto"
            />
          </div>

          {/* Desktop Navigation - Updated with Gift Sets */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-lg font-semibold">
            {["Home", "Our Story", "For Him", "For Her", "Gift Sets", "All Products", "Contact Us"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gold-500 relative group transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gold-500 hover:text-gold-300 transition">
              <UserIcon />
            </button>
            <button className="text-gold-500 hover:text-gold-300 transition relative">
              <ShoppingCartIcon />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Updated with Gift Sets */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-900 py-4 px-4">
            {["Home", "Our Story", "For Him", "For Her", "Gift Sets", "All Products", "Contact Us"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 text-gold-500 text-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className={`bg-black bg-opacity-80 p-6 md:p-10 rounded-xl text-center transition-all duration-1000 transform border border-gold-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } delay-700 relative z-10 mx-4`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold-500 tracking-wide drop-shadow-lg hero-glow">
            Discover Your Signature Scent
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Premium, long-lasting perfumes designed to evoke emotions and
            memories. Experience the essence of SOUL.
          </p>
          <a
            href="#all-products"
            className="mt-6 inline-block px-6 md:px-8 py-2 md:py-3 bg-gold-600 text-black font-semibold rounded-full shadow-lg hover:bg-gold-500 transition transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
        
        {/* Slideshow indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentBg ? "bg-gold-500" : "bg-gray-600"
              }`}
              onClick={() => setCurrentBg(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section id="all-products" className="py-16 px-6 max-w-7xl mx-auto text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-gold-500">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 shadow-2xl rounded-xl p-4 border border-gray-700 hover:border-gold-500 transition-all duration-300">
              <img
                src={product.images[0]}
                alt={product.name}
                className="rounded-lg w-full h-64 object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gold-400">{product.name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {product.description}
              </p>
              <p className="text-gold-500 font-bold mt-2">${product.price}</p>
              <div className="mt-4 flex justify-between">
                <a 
                  href={`/product/${product.id}`}
                  className="px-4 py-2 bg-gray-700 text-gold-300 text-sm font-medium rounded hover:bg-gray-600 transition"
                >
                  View Details
                </a>
                <button 
                  onClick={addToCart}
                  className="px-4 py-2 bg-gold-600 text-black text-sm font-medium rounded hover:bg-gold-500 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} SOUL Fragrance. All Rights Reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-gold-500 hover:text-gold-300 transition">Privacy Policy</a>
            <a href="#" className="text-gold-500 hover:text-gold-300 transition">Terms of Service</a>
            <a href="#" className="text-gold-500 hover:text-gold-300 transition">Contact Us</a>
            <a href="#" className="text-gold-500 hover:text-gold-300 transition">Shipping & Returns</a>
          </div>
        </div>
      </footer>

      {/* Custom styles for gold color and text glow */}
      <style jsx>{`
        .text-gold-500 { color: #D4AF37; }
        .text-gold-400 { color: #E5C158; }
        .text-gold-300 { color: #F1D486; }
        .bg-gold-600 { background-color: #B8860B; }
        .bg-gold-500 { background-color: #D4AF37; }
        .border-gold-500 { border-color: #D4AF37; }
        .hover\:bg-gold-500:hover { background-color: #D4AF37; }
        .hover\:text-gold-300:hover { color: #F1D486; }
        
        /* Hero text glow effect */
        .hero-glow {
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.5),
                       0 0 20px rgba(212, 175, 55, 0.3),
                       0 0 30px rgba(212, 175, 55, 0.2);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-glow {
            text-shadow: 0 0 8px rgba(212, 175, 55, 0.5),
                         0 0 15px rgba(212, 175, 55, 0.3);
          }
        }
      `}</style>
    </div>
  );
}
