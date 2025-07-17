// src/components/ShareModal.jsx
import React from "react";

const ShareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%]  max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold">&times;</button>
        
        <h2 className="text-xl font-bold text-center mb-4">Share My Card</h2>

        <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-lg font-medium mb-4 hover:bg-blue-50">
          ⬇ Download My QR Code
        </button>

        <div className="h-200 grid grid-cols-3 gap-3 mb-4">
          <a href="" className="bg-green-500 text-white py-2 rounded text-center">WhatsApp</a>
          <a href="" className="bg-blue-600 text-white py-2 rounded text-center">Facebook</a>
          <a href="" className="bg-pink-500 text-white py-2 rounded text-center">Instagram</a>
          <a href="" className="bg-blue-800 text-white py-2 rounded text-center">LinkedIn</a>
          <a href="" className="bg-gray-500 text-white py-2 rounded text-center">Email</a>
          <a href="" className="bg-black text-white py-2 rounded text-center">X</a>
        </div>

        <div className="flex items-center justify-between border px-3 py-2 rounded">
          <span className="text-sm truncate">https://ceo.freelancedigitalit.com</span>
          <button onClick={() => navigator.clipboard.writeText("https://ceo.freelancedigitalit.com")}>📋</button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
