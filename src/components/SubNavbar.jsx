import React, { useState } from "react";
import {
  FaPuzzlePiece,
  FaTags,
  FaStore,
  FaMagic,
  FaUsers,
} from "react-icons/fa";

const SubNavbar = ({ setAgeFilter }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    {
      name: "Shop by Age",
      icon: <FaUsers />,
      subItems: ["0-3", "4-7", "8-12", "13+"],
    },
    { name: "Shop by Category", icon: <FaPuzzlePiece /> },
    { name: "Discover", icon: <FaMagic /> },
    { name: "Sale", icon: <FaTags /> },
    { name: "Pretend Play", icon: <FaStore /> },
  ];

  return (
    <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-lg text-white py-3 px-6 flex justify-center shadow-lg fixed top-16 left-0 w-full z-40">
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="flex items-center gap-2 text-lg font-semibold hover:text-yellow-400">
              <span className="text-yellow-400">{item.icon}</span> {item.name}
            </button>
            {item.subItems && hoveredItem === item.name && (
              <ul className="absolute left-0 mt-2 bg-black/90 shadow-lg py-2 rounded-md w-40">
                {item.subItems.map((age) => (
                  <li key={age}>
                    <button
                      onClick={() => setAgeFilter(age)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/10 transition"
                    >
                      {age} Years
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNavbar;
