import React, { useState } from 'react';
import img1 from '../assetes/p.jpg';
import img2 from '../assetes/p.jpg';
import img3 from '../assetes/p.jpg';
import img4 from '../assetes/p.jpg';

const images = [img1, img2, img3, img4];


const ImageBoxGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-2xl mx-auto p-5   bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Gallery</h2>

      {/* 2x2 Grid Box */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            onClick={() => openModal(index)}
            className="w-full h-100 object-cover rounded cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal View */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✖
          </button>

          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-4xl"
          >
            ❮
          </button>

          <img
            src={images[currentIndex]}
            alt="Full View"
            className="max-h-[80vh] max-w-[90vw] rounded shadow-xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-4xl"
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageBoxGallery;