import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const categoryImages = [
  { src: "/src/assets/ThirdImg/Img1.jpg" },
  { src: "/src/assets/ThirdImg/Img2.jpg" },
  { src: "/src/assets/ThirdImg/Img3.jpg" },
  { src: "/src/assets/ThirdImg/Img4.jpg" },
  { src: "/src/assets/ThirdImg/Img5.jpg" },
  { src: "/src/assets/ThirdImg/Img6.jpg" },
  { src: "/src/assets/ThirdImg/Img7.jpg" },
  { src: "/src/assets/ThirdImg/Img8.jpg" },
];

const ThirdSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categoryImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-black via-black/80 to-black/95 py-20 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Section Title */}
      <h2 className="text-center text-white text-3xl md:text-5xl font-extrabold mb-10">
        <span className="text-yellow-400">Shop by</span> Category
      </h2>
      <button
        className="absolute left-6 bg-white/10 text-white p-5 rounded-full hover:bg-white/20 shadow-lg"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </button>
      <div className="w-full max-w-7xl flex overflow-hidden justify-center gap-6">
        <AnimatePresence>
          {categoryImages.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <motion.div
              key={index}
              className="flex-none w-1/4 p-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 text-center hover:shadow-xl transition-all duration-300 h-[280px] flex items-center justify-center overflow-hidden">
                <img 
                  src={item.src} 
                  alt={`Category ${index}`} 
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        className="absolute right-6 bg-white/10 text-white p-5 rounded-full hover:bg-white/20 shadow-lg"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </button>
      <div className="absolute bottom-6 flex space-x-3">
        {categoryImages.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
