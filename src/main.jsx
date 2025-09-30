import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './context/CartContext.jsx'; // <-- Import the provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  {/* <-- Wrap your App component */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);