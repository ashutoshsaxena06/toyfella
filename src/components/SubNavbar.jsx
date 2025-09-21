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
  <div className="bg-gradient-to-r from-primary/60 to-secondary/40 backdrop-blur-lg text-gray-900 py-3 px-6 flex justify-center shadow-lg fixed top-16 left-0 w-full z-40">
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
              <ul className="absolute left-0 mt-2 bg-yellow-300/90 shadow-lg py-2 rounded-xl min-w-[180px] w-auto">
                {item.subItems.map((age) => (
                  <li key={age}>
                    <a
                      href={`/shop?age=${encodeURIComponent(age + ' Years')}`}
                      className="block w-full text-left px-4 py-2 text-base text-[#222D65] font-semibold rounded-xl transition duration-200 hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white"
                      style={{ cursor: 'pointer', display: 'block' }}
                      tabIndex={0}
                    >
                      {age} Years
                    </a>
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
