// src/components/ShareModal.jsx
import React from "react";
import { Link } from "react-router-dom";

const ShareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shareUrl = "https://ceo.freelancedigitalit.com";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-[95%] max-w-lg shadow-xl relative transition-all duration-300 ease-in-out">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold transition"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Share My Card
        </h2>

        {/* Download QR */}
        <button className="w-full border border-blue-500 text-blue-600 py-2 rounded-lg font-medium mb-6 hover:bg-blue-50 transition duration-200">
          ⬇ Download My QR Code
        </button>

        {/* Social Links */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Link
            to=""
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-center font-medium transition"
          >
            WhatsApp
          </Link>
          <Link
            to=""
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center font-medium transition"
          >
            Facebook
          </Link>
          <Link
            to=""
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg text-center font-medium transition"
          >
            Instagram
          </Link>
          <Link
            to=""
            className="bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg text-center font-medium transition"
          >
            LinkedIn
          </Link>
          <Link
            to=""
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg text-center font-medium transition"
          >
            Email
          </Link>
          <Link
            to=""
            className="bg-black hover:bg-gray-900 text-white py-2 rounded-lg text-center font-medium transition"
          >
            X
          </Link>
        </div>

        {/* Share URL */}
        <div className="flex items-center justify-between border px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
          <span className="text-sm text-gray-700 truncate">
            {shareUrl}
          </span>
          <button
            onClick={() => navigator.clipboard.writeText(shareUrl)}
            className="text-blue-600 text-lg hover:text-blue-800 transition"
          >
            📋
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
