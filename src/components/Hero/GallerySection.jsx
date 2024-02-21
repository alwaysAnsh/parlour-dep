// GallerySection.jsx
import React, { useState, useEffect } from "react";
import "./GallerySection.css"; // Import the CSS file for styling

const GallerySection = () => {
  const initialPhotos = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
  ];

  const [shuffledPhotos, setShuffledPhotos] = useState(initialPhotos);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      // Shuffle the photos array
      const shuffled = [...initialPhotos].sort(() => Math.random() - 0.5);
      setShuffledPhotos(shuffled);
    }, 2000); // Adjusted to match the new duration (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(shuffleInterval);
  }, [initialPhotos]);

  return (
    <div className="container max-h-[400px] overflow-y-auto mx-auto my-8 rounded-lg p-10 bg-orange-100 shadow-2xl md:max-h-[800px]">
      <div className="container mx-auto my-8 flex justify-center">
        <h2 className="text-5xl font-caveat mb-4">GlamourGallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Your gallery images go here */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffledPhotos.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg fade`}
            style={{ animationDelay: `${Math.random() * 5}s` }} // Adjusted the delay to match the new duration
          >
            <img
              className="object-cover w-full h-48 md:h-64 lg:h-72"
              src={`/Gallery/${photo}`}
              alt={`Photo ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
