import React, { useEffect, useState } from "react";

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
    
    // Set up the slideshow interval
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 2000); // Change every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar with minimal spacing but gap below */}
      <header className="flex flex-col items-center pt-0 pb-0 shadow mb-4">
        {/* Logo with minimal spacing */}
        <img
          src="/images/logo.png"
          alt="SOUL Logo"
          className={`transition-transform duration-1000 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "220px", height: "auto", margin: "0" }}
        />

        {/* Menu with minimal spacing */}
        <nav className="mt-0 mb-1 flex space-x-5 text-lg font-semibold">
          {["Products", "About", "Contact"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-gray-600 transition-opacity duration-700 delay-${index * 200} ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section with slideshow */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        <div
          className={`bg-black bg-opacity-50 p-10 rounded-xl text-center transition-all duration-1000 transform ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } delay-700`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Discover Your Signature Scent
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
            Premium, long-lasting perfumes designed to evoke emotions and
            memories. Experience the essence of SOUL.
          </p>
          <a
            href="#products"
            className="mt-6 inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
        
        {/* Slideshow indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentBg ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentBg(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="/images/product1.jpg"
              alt="Product 1"
              className="rounded-lg w-full h-80 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">Soul No. 1</h3>
            <p className="text-gray-600 text-sm">
              A fresh, modern fragrance with notes of citrus and amber.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="/images/product2.jpg"
              alt="Product 2"
              className="rounded-lg w-full h-80 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">Soul No. 2</h3>
            <p className="text-gray-600 text-sm">
              A warm, woody fragrance with hints of vanilla and musk.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-4">
            <img
              src="/images/product3.jpg"
              alt="Product 3"
              className="rounded-lg w-full h-80 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">Soul No. 3</h3>
            <p className="text-gray-600 text-sm">
              A floral, elegant fragrance for a truly timeless feel.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} SOUL Fragrance. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
