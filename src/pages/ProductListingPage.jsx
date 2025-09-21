import React from 'react';

// Example product data (replace with API or props later)
const products = [
  {
    id: 1,
    name: 'Toy Car',
    price: 19.99,
    description: 'A fun toy car for kids.',
    category: 'Vehicles',
    popularity: 5,
    image: '/src/assets/HeroImg/HeroImg1.jpg',
    inStock: true,
  },
  {
    id: 2,
    name: 'Puzzle Set',
    price: 14.99,
    description: 'Challenging puzzle set for all ages.',
    category: 'Puzzles',
    popularity: 4,
    image: '/src/assets/ThirdImg/Img2.jpg',
    inStock: false,
  },
  {
    id: 3,
    name: 'Building Blocks',
    price: 24.99,
    description: 'Colorful building blocks for creative play.',
    category: 'Blocks',
    popularity: 3,
    image: '/src/assets/ThirdImg/Img3.jpg',
    inStock: true,
  },
];

import { useState } from 'react';

const categories = [...new Set(products.map(p => p.category))];

const ShopPage = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('popularity');

  let filtered = filter === 'All' ? products : products.filter(p => p.category === filter);
  if (sort === 'price') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === 'popularity') {
    filtered = [...filtered].sort((a, b) => b.popularity - a.popularity);
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="p-2 border rounded">
          <option value="All">All Categories</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} className="p-2 border rounded">
          <option value="popularity">Sort by Popularity</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-blue-600 font-bold mb-4">${product.price}</p>
            <button
              className={`py-2 px-4 rounded text-white font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 ${product.inStock ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
              onClick={() => product.inStock && onAddToCart(product)}
              disabled={!product.inStock}
              aria-disabled={!product.inStock}
              aria-label={product.inStock ? `Add ${product.name} to cart` : `${product.name} is out of stock`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
