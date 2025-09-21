import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
  <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-primary/80 to-secondary/60 backdrop-blur-lg text-gray-900 px-6 py-4 flex justify-between items-center shadow-lg z-50">
      {/* Logo */}
      <a href="/" className="flex items-center" aria-label="ToyFella Home">
        <img
          src="/toyfella_svg.svg"
          alt="ToyFella Logo"
          className="h-10 w-auto drop-shadow-md"
          style={{ minWidth: '40px' }}
        />
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-lg font-medium">
        <a href="/" className="hover:text-yellow-400 transition duration-300">Home</a>
        <a href="/about" className="hover:text-yellow-400 transition duration-300">About</a>
        <a href="/shop" className="hover:text-yellow-400 transition duration-300">Shop</a>
      </nav>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        <a href="/cart" className="relative text-white hover:text-yellow-400 transition duration-300">
          <FaShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">3</span>
        </a>
        <a href="/login" className="text-white hover:text-yellow-400 transition duration-300">
          <FaUser className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
