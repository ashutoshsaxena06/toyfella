import React, { useState, useEffect } from 'react';

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

const ageGroups = ['0-12 months', '1-3 years', '3-5 years', '5+ years'];
const categories = ['Vehicles', 'Puzzles', 'Blocks'];
const subcategories = ['Cars', 'Trucks', 'Animals', 'Shapes'];
const priceRanges = ['Under $20', '$20-$30', 'Above $30'];
const sortOptions = [
  { value: 'best', label: 'Best Sellers' },
  { value: 'priceHigh', label: 'Price High To Low' },
  { value: 'priceLow', label: 'Price Low To High' },
  { value: 'newest', label: 'Newest' },
];

const ShopPage = ({ onAddToCart }) => {
  // Filters
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('best');
  const [search, setSearch] = useState('');

  // Pre-filter by age from query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ageParam = params.get('age');
    if (ageParam && ageGroups.includes(ageParam)) {
      setAge(ageParam);
    }
  }, []);

  let filtered = products.filter(p => {
    let match = true;
    if (age) match = match && p.description.toLowerCase().includes(age.split(' ')[0]); // Example: match by age keyword
    if (category) match = match && p.category === category;
    if (subcategory) match = match && p.name.toLowerCase().includes(subcategory.toLowerCase());
    if (price) {
      if (price === 'Under $20') match = match && p.price < 20;
      else if (price === '$20-$30') match = match && p.price >= 20 && p.price <= 30;
      else if (price === 'Above $30') match = match && p.price > 30;
    }
    if (search) match = match && (p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));
    return match;
  });
  if (sort === 'priceHigh') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sort === 'priceLow') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === 'best') {
    filtered = [...filtered].sort((a, b) => b.popularity - a.popularity);
  } // Add newest logic if needed

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-500">Shop Toys</h1>
      {/* Filter Bar - theme blend */}
      <div className="flex flex-wrap gap-4 mb-8 justify-between items-center px-2 py-4" style={{background: 'transparent'}}>
        <div className="flex gap-2 items-center">
          <span className="font-bold text-[#222D65]">Filter By</span>
          <div className="rounded-2xl bg-[#EFEFEF] px-4 py-2 flex flex-col items-center shadow-sm" style={{minWidth:120}}>
            <label className="font-semibold text-[#222D65] mb-1">Age</label>
            <select value={age} onChange={e => setAge(e.target.value)} className="p-2 rounded-xl bg-[#F5F4F5] text-[#222D65] font-semibold">
              <option value="">All</option>
              {ageGroups.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <div className="rounded-2xl bg-[#EFEFEF] px-4 py-2 flex flex-col items-center shadow-sm" style={{minWidth:120}}>
            <label className="font-semibold text-[#222D65] mb-1">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="p-2 rounded-xl bg-[#F5F4F5] text-[#222D65] font-semibold">
              <option value="">All</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="rounded-2xl bg-[#EFEFEF] px-4 py-2 flex flex-col items-center shadow-sm" style={{minWidth:120}}>
            <label className="font-semibold text-[#222D65] mb-1">Subcategory</label>
            <select value={subcategory} onChange={e => setSubcategory(e.target.value)} className="p-2 rounded-xl bg-[#F5F4F5] text-[#222D65] font-semibold">
              <option value="">All</option>
              {subcategories.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="rounded-2xl bg-[#EFEFEF] px-4 py-2 flex flex-col items-center shadow-sm" style={{minWidth:120}}>
            <label className="font-semibold text-[#222D65] mb-1">Price</label>
            <select value={price} onChange={e => setPrice(e.target.value)} className="p-2 rounded-xl bg-[#F5F4F5] text-[#222D65] font-semibold">
              <option value="">All</option>
              {priceRanges.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-[#222D65]">{filtered.length} Items</span>
          <div className="rounded-2xl bg-[#EFEFEF] px-4 py-2 flex flex-col items-center shadow-sm" style={{minWidth:160}}>
            <label className="font-semibold text-[#222D65] mb-1">Sort By:</label>
            <select value={sort} onChange={e => setSort(e.target.value)} className="p-2 rounded-xl bg-[#9BD4FF] text-[#222D65] font-bold">
              {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search toys..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="p-2 border rounded w-64 bg-[#EFEFEF] text-[#222D65]"
          aria-label="Search toys"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        ) : (
          filtered.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-all">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-blue-600 font-bold mb-4 text-lg">${product.price}</p>
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
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
