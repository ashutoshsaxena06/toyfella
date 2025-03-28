import React from 'react';

const ToyCard = ({ toy, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={toy.image} alt={toy.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{toy.name}</h3>
      <p className="text-gray-600">Age: {toy.age}</p>
      <p className="text-blue-600 font-bold">${toy.price}</p>
      <button
        onClick={() => addToCart(toy)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ToyCard;