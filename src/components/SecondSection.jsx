import React from "react";

const videoData = [
  { id: 1, src: "https://www.youtube.com/embed/9KN0DGP3Gqc?autoplay=1&mute=1&loop=1&playlist=9KN0DGP3Gqc", title: "Toy Adventures" },
  { id: 2, src: "https://www.youtube.com/embed/ORFjlG338vY?autoplay=1&mute=1&loop=1&playlist=ORFjlG338vY", title: "Learning & Fun" },
  { id: 3, src: "https://www.youtube.com/embed/KYck1bfe1WU?autoplay=1&mute=1&loop=1&playlist=KYck1bfe1WU", title: "Creative Playtime" },
  { id: 4, src: "https://www.youtube.com/embed/4Kq0-ocH92g?autoplay=1&mute=1&loop=1&playlist=4Kq0-ocH92g", title: "Magical Toy World" },
];

const SecondSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-black/80 to-black/95 py-20 px-4 md:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="text-center text-white text-3xl md:text-5xl font-extrabold mb-10">
        <span className="text-yellow-400">Explore</span> Our Toy Collection
      </h2>

      {/* Video Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="relative bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/15 transition transform hover:scale-105 hover:shadow-xl h-[350px] md:h-[400px] lg:h-[450px]"
          >
            {/* Video Embed (Shorter Height) */}
            <div className="overflow-hidden rounded-lg h-2/3">
              <iframe
                className="w-full h-full rounded-lg"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Title */}
            <h3 className="text-white text-lg md:text-xl font-semibold mt-3 text-center">
              {video.title}
            </h3>

            {/* Shop Now Button */}
            <div className="flex justify-center mt-2">
              <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
