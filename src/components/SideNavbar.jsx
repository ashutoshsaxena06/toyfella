import React, { useState } from 'react';

const SideNavbar = ({ setAgeFilter }) => {
  const [isOpen, setIsOpen] = useState(false); // Controls sidebar visibility on mobile
  const [isMinimized, setIsMinimized] = useState(false); // Controls minimized state on desktop

  const ageGroups = ['0-3', '4-7', '8-12', '13+'];
  const navItems = [
    { name: 'Shop by Age', action: null, subItems: ageGroups },
    { name: 'Learning Toys & Puzzles', action: () => console.log('Learning Toys clicked') },
    { name: 'Discover', action: () => console.log('Discover clicked') },
    { name: 'Sale', action: () => console.log('Sale clicked') },
    { name: 'Pretend Play', action: () => console.log('Pretend Play clicked') },
  ];

  return (
    <>
      {/* Hamburger Button for Mobile (and when minimized) */}
      <button
        className={`md:hidden p-2 fixed top-4 left-4 z-50 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors ${
          isMinimized ? 'md:block' : 'md:hidden'
        }`}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-xl p-6 transform transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 ${isMinimized ? 'w-16' : 'w-64'}`}
      >
        {/* Minimize/Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors"
          onClick={() => {
            if (window.innerWidth < 768) {
              // Mobile: Close sidebar and show hamburger
              setIsOpen(false);
            } else {
              // Desktop: Toggle minimize
              setIsMinimized(!isMinimized);
            }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className={`${isMinimized ? 'hidden' : 'block'}`}>
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Toyfilla</h2>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      className="w-full text-left text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors"
                      onClick={() => console.log(`${item.name} clicked`)}
                    >
                      {item.name}
                    </button>
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subItems.map((age) => (
                        <li key={age}>
                          <button
                            onClick={() => setAgeFilter(age)}
                            className="w-full text-left text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
                          >
                            {age} Years
                          </button>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={() => setAgeFilter('')}
                          className="w-full text-left text-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
                        >
                          All Ages
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <button
                    onClick={item.action}
                    className="w-full text-left text-lg font-semibold text-gray-800 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Minimized View (Icons Only) */}
        {isMinimized && (
          <div className="flex flex-col items-center space-y-6 mt-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action || (() => setIsMinimized(false))}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v8m-4-4h8"
                  />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideNavbar;