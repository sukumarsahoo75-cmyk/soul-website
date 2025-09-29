import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "Mystic",
      price: 7499,
      quantity: 1,
      image: "/images/product1.jpg"
    },
    {
      id: 5,
      name: "Luxury Perfume Gift Set",
      price: 4999,
      quantity: 1,
      image: "/images/product5.jpg"
    }
  ];

  const formatIndianRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 100;
  const total = subtotal + shipping;

  return (
    <Layout>
      <section className="py-16 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gold-500 text-center mb-8">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg mb-6">Your cart is empty</p>
              <Link to="/all-products" className="bg-gold-600 text-black px-6 py-3 rounded-lg hover:bg-gold-500 transition font-sans">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-800 rounded-xl p-6 mb-4 border border-gray-700">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gold-400 mb-1">{item.name}</h3>
                        <p className="text-gold-500 font-bold">{formatIndianRupees(item.price)}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gold-500 hover:bg-gray-600 transition">
                          -
                        </button>
                        <span className="text-gray-300 font-sans">{item.quantity}</span>
                        <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gold-500 hover:bg-gray-600 transition">
                          +
                        </button>
                      </div>
                      <button className="text-red-400 hover:text-red-300 transition">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gold-500/30 h-fit">
                <h3 className="text-xl font-semibold text-gold-400 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>{formatIndianRupees(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>{formatIndianRupees(shipping)}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <div className="flex justify-between text-lg font-semibold text-gold-400">
                      <span>Total</span>
                      <span>{formatIndianRupees(total)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gold-600 text-black font-semibold py-3 rounded-lg hover:bg-gold-500 transition mb-4 font-sans">
                  Proceed to Checkout
                </button>
                
                <Link to="/all-products" className="block text-center text-gold-500 hover:text-gold-300 transition font-sans">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;