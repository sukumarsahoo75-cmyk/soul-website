import React from 'react';
import Layout from '../components/Layout';

const Profile = () => {
  return (
    <Layout>
      <section className="py-16 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gold-500 text-center mb-8">My Profile</h1>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gold-500/30">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black text-2xl font-bold">U</span>
                </div>
                <h2 className="text-2xl font-semibold text-gold-400">User Account</h2>
                <p className="text-gray-400">user@example.com</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gold-300 mb-3">Account Information</h3>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <p className="text-gray-300 mb-2"><span className="text-gold-400">Member since:</span> January 2024</p>
                    <p className="text-gray-300"><span className="text-gold-400">Orders placed:</span> 2</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gold-300 mb-3">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="bg-gray-700 text-gold-300 py-3 rounded-lg hover:bg-gray-600 transition font-sans">
                      Order History
                    </button>
                    <button className="bg-gray-700 text-gold-300 py-3 rounded-lg hover:bg-gray-600 transition font-sans">
                      Wishlist
                    </button>
                    <button className="bg-gray-700 text-gold-300 py-3 rounded-lg hover:bg-gray-600 transition font-sans">
                      Address Book
                    </button>
                    <button className="bg-gray-700 text-gold-300 py-3 rounded-lg hover:bg-gray-600 transition font-sans">
                      Payment Methods
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-600">
                  <button className="w-full bg-gold-600 text-black font-semibold py-3 rounded-lg hover:bg-gold-500 transition font-sans">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;