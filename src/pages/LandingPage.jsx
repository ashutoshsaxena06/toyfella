import React, { useState } from 'react';
import ToyCard from '../components/ToyCard';

const toysData = [
  { id: 1, name: 'Teddy Bear', age: '0-3', price: 15, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Lego Set', age: '4-7', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Action Figure', age: '8-12', price: 25, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Puzzle Game', age: '13+', price: 20, image: 'https://via.placeholder.com/150' },
];

const LandingPage = ({ addToCart }) => {
  const [ageFilter, setAgeFilter] = useState('');

  const filteredToys = ageFilter
    ? toysData.filter((toy) => toy.age === ageFilter)
    : toysData;

  return (
    <div className="flex">
      <div className="md:ml-64 p-4 w-full">
        <h2 className="text-3xl font-bold mb-6">Welcome to Toyfilla</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredToys.map((toy) => (
            <ToyCard key={toy.id} toy={toy} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;