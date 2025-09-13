import React, { useEffect, useState } from "react";
import { User, ShoppingCart } from "lucide-react"; // icons for profile & cart

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // Array of background images
  const backgroundImages = [
    "/images/hero-bg.jpg",
    "/images/hero-bg2.jpg",
    "/images/hero-bg3.jpg"
  ];

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-gray-100">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-2 border-b border-gray-800">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="SOUL Logo"
          className={`transition-opacity duration-1000 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          } w-[180px] md:w-[250px] h-auto`}
        />

        {/* Menu */}
        <nav className="flex-1 flex justify-center space-x-6 md:space-x-8 text-lg font-semibold">
          {["Home", "Our Story", "For Him", "For Her", "All Product", "Contact Us"].map(
            (item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className={`text-gold-500 relative group transition-all duration-300 delay-${index * 200} ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>

        {/* Profile & Cart Icons */}
        <div className="flex space-x-4">
          <button aria-label="Profile" className="text-gold-500 hover:text-gold-300">
            <User size={24} />
          </button>
          <button aria-label="Cart" className="text-gold-500 hover:text-gold-300">
            <ShoppingCart size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center transition-all duration-1000"
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
            href="#allproduct"
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
      <section
        id="allproduct"
        className="py-16 px-6 max-w-6xl mx-auto text-center bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-10 text-gold-500">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Existing 3 product cards remain unchanged */}
          {/* You can add the 4th product later in Phase 2 */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} SOUL Fragrance. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gold-500 hover:text-gold-300 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gold-500 hover:text-gold-300 transition">
            Terms of Service
          </a>
          <a href="#" className="text-gold-500 hover:text-gold-300 transition">
            Contact Us
          </a>
        </div>
      </footer>

      {/* Custom styles */}
      <style jsx>{`
        .text-gold-500 {
          color: #d4af37;
        }
        .text-gold-400 {
          color: #e5c158;
        }
        .text-gold-300 {
          color: #f1d486;
        }
        .bg-gold-600 {
          background-color: #b8860b;
        }
        .bg-gold-500 {
          background-color: #d4af37;
        }
        .border-gold-500 {
          border-color: #d4af37;
        }
        .hover\:bg-gold-500:hover {
          background-color: #d4af37;
        }
        .hover\:text-gold-300:hover {
          color: #f1d486;
        }

        .hero-glow {
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.5),
            0 0 20px rgba(212, 175, 55, 0.3),
            0 0 30px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </div>
  );
}
