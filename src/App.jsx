import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SideNavbar from './components/SideNavbar';
import LandingPage from './pages/LandingPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const [cart, setCart] = useState([]);
  const [ageFilter, setAgeFilter] = useState('');

  const addToCart = (toy) => {
    setCart([...cart, toy]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <SideNavbar setAgeFilter={setAgeFilter} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<LandingPage addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
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