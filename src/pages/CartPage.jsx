import React from 'react';

const CartPage = ({ cart, removeFromCart, updateQuantity, error }) => {
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="p-4 md:ml-64 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {error && <div className="mb-4 text-red-600 font-semibold" role="alert">{error}</div>}
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 mb-4 rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
                <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</label>
                <input
                  id={`quantity-${item.id}`}
                  type="number"
                  min={1}
                  value={item.quantity || 1}
                  onChange={e => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 p-1 border rounded text-center mr-2"
                  aria-label={`Quantity for ${item.name}`}
                />
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;