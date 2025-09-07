
import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <motion.header 
        className="text-5xl font-serif mt-10 text-gold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SOUL Fragrance
      </motion.header>
      <motion.p 
        className="mt-4 max-w-xl text-center text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Redefining luxury perfumery with timeless sophistication.
      </motion.p>
    </div>
  );
}
