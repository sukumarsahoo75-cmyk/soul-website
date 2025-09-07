import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="SOUL Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold tracking-widest">SOUL</span>
        </div>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#products" className="hover:text-gray-600">
            Products
          </a>
          <a href="#about" className="hover:text-gray-600">
            About
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
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
