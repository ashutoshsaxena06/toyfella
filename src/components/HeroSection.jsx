import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "src/assets/HeroImg/HeroImg1.jpg",
  "src/assets/HeroImg/HeroImg2.jpg",
  "src/assets/HeroImg/HeroImg3.jpg",
  "src/assets/HeroImg/HeroImg4.jpg",
  "src/assets/HeroImg/HeroImg5.jpg",
  "src/assets/HeroImg/HeroImg6.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
  <div className="relative w-full min-h-screen mt-10 flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="w-full h-full object-cover brightness-75"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-secondary/20 to-secondary/80"></div>

      {/* Hero Content */}
      <div className="absolute text-white text-center px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-xl">
    Welcome to <span className="text-yellow-400">ToyFella!</span>
  </h1>
  <p className="text-lg md:text-2xl mt-4 font-light drop-shadow-lg">
    Discover a magical world of toys and fun!
  </p>
  <button className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-2xl hover:bg-yellow-500 transition-all transform hover:scale-105">
    Explore Now
  </button>
</div>


      {/* Dot Indicators */}
      <div className="absolute bottom-10 flex space-x-2 md:space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125 shadow-xl"
                : "bg-gray-400 opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;