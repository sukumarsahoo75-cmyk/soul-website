import React, { useEffect, useState, useRef } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [
    "/images/hero-bg.jpg",
    "/images/hero-bg2.jpg",
    "/images/hero-bg3.jpg",
  ];

  // keep a ref to interval so we can reset it when user clicks indicator
  const intervalRef = useRef(null);

  useEffect(() => {
    setLoaded(true);

    // Preload images to avoid flicker
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // start slideshow
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startInterval() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // change every 4s (you can tweak)
  }

  function goToSlide(index) {
    setCurrentBg(index);
    startInterval(); // reset timing so user has full interval after click
  }

  return (
    <div className="bg-black text-gray-100">
      {/* Navbar */}
      <header className="flex flex-col items-center pt-0 pb-0 mb-4 border-b border-gray-800">
        <img
          src="/images/logo.png"
          alt="SOUL Logo"
          className={`transition-transform duration-1000 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: "70%",
            maxWidth: "400px",
            height: "auto",
            margin: "0",
          }}
        />
        <nav className="mt-0 mb-1 flex space-x-10 text-xl font-semibold">
          {["Products", "About", "Contact"].map((item, index) => (
            <div key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-gold-500 hover:text-gold-300 transition-all duration-300 delay-${
                  index * 200
                } ${loaded ? "opacity-100" : "opacity-0"}`}
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </nav>
      </header>

      {/* =========================
          HERO: stacked <img> cross-dissolve
          ========================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* stacked images (all in DOM) */}
        {backgroundImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`slide-${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            // use inline style for smooth opacity transition
            style={{
              transition: "opacity 1600ms ease-in-out",
              opacity: idx === currentBg ? 1 : 0,
              transform: "scale(1.03)", // subtle fill so edges don't show during fade
            }}
            aria-hidden={idx === currentBg ? "false" : "true"}
          />
        ))}

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* hero content */}
        <div
          className={`bg-black bg-opacity-80 p-10 rounded-xl text-center transition-all duration-1000 transform border border-gold-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } delay-700 relative z-10`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gold-500 tracking-wide drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
            Discover Your Signature Scent
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Premium, long-lasting perfumes designed to evoke emotions and
            memories. Experience the essence of SOUL.
          </p>
          <a
            href="#products"
            className="mt-6 inline-block px-8 py-3 bg-gold-600 text-black font-semibold rounded-full shadow-lg hover:bg-gold-500 transition transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>

        {/* indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBg ? "bg-gold-500 scale-110" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Product Section (intact) */}
      <section
        id="products"
        className="py-16 px-6 max-w-6xl mx-auto text-center bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-10 text-gold-500">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "product1.jpg", name: "Soul No. 1", desc: "A fresh, modern fragrance with notes of citrus and amber." },
            { img: "product2.jpg", name: "Soul No. 2", desc: "A warm, woody fragrance with hints of vanilla and musk." },
            { img: "product3.jpg", name: "Soul No. 3", desc: "A floral, elegant fragrance for a truly timeless feel." },
          ].map((p, idx) => (
            <div
              key={idx}
              className="bg-gray-800 shadow-2xl rounded-xl p-4 border border-gray-700 hover:border-gold-500 transition-all duration-300"
            >
              <img
                src={`/images/${p.img}`}
                alt={p.name}
                className="rounded-lg w-full h-80 object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gold-400">
                {p.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              <button className="mt-4 px-4 py-2 bg-gold-600 text-black text-sm font-medium rounded hover:bg-gold-500 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer (intact) */}
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

      {/* gold color styles (intact) */}
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
      `}</style>
    </div>
  );
}
