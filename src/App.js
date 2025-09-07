import React, { useEffect, useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [fade, setFade] = useState(true);

  const backgroundImages = [
    "/images/hero-bg.jpg",
    "/images/hero-bg2.jpg",
    "/images/hero-bg3.jpg",
  ];

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        setFade(true); // fade in new image
      }, 500); // half the transition time for smoother effect
    }, 4000); // 4 sec per slide

    return () => clearInterval(interval);
  }, []);

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
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>
      </header>

      {/* Hero Section with true crossfade */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000`}
          style={{
            backgroundImage: `url(${backgroundImages[currentBg]})`,
            opacity: fade ? 1 : 0,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div
          className={`bg-black bg-opacity-80 p-10 rounded-xl text-center transition-all duration-1000 transform border border-gold-500 relative z-10 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
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

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentBg ? "bg-gold-500" : "bg-gray-600"
              }`}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentBg(index);
                  setFade(true);
                }, 500);
              }}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Product Section + Footer remain unchanged */}
    </div>
  );
}
