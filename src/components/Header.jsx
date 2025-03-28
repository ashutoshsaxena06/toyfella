import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Toyfilla</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/cart" className="hover:underline">Cart</a>
        <a href="/login" className="hover:underline">Login</a>
      </nav>
    </header>
  );
};

export default Header;
