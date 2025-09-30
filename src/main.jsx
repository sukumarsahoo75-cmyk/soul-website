import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx'; // <-- 1. Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap everything with AuthProvider */}
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
);