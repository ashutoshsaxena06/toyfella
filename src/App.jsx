import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SubNavbar from './components/SubNavbar';
import LandingPage from './pages/LandingPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ShopPage from './pages/ShopPage';

const App = () => {
  const [cart, setCart] = useState([]);
  const [ageFilter, setAgeFilter] = useState('');
  const [error, setError] = useState("");

  const addToCart = (product) => {
    setError("");
    if (!product.inStock) {
      setError("This item is out of stock.");
      return;
    }
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* Show SubNavbar only on Home page */}
        {window.location.pathname === '/' && (
          <SubNavbar setAgeFilter={setAgeFilter} />
        )}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<LandingPage addToCart={addToCart} />}
            />
            <Route
              path="/shop"
              element={<ShopPage onAddToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} error={error} />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/signup"
              element={<SignupPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;