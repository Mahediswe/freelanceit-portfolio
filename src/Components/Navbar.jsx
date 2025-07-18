// import React from 'react'
// import { IoMdShare } from "react-icons/io";
// import logo from "../assetes/Logo.jpeg"

// const Navbar = () => {
//   return (
//     <div className='max-w-7xl mx-auto justify-between flex flex-row'>
//       <div className='flex flex-row'>
//         <img src={logo} alt="Logo" />
//         <h1 className="text-3xl font-semibold pt-3"> Frelance Digital It</h1>
//       </div>
//       <div>
//         <button>
//             <IoMdShare className='w-16 h-16' />

//         </button>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { IoMdShare } from "react-icons/io";
import logo from "../assetes/Logo.jpeg";
import ShareModal from "./ShareModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-blue-900 px-4 py-3 max-w-2xl mx-auto">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        
        {/* Left side: Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-16 rounded-lg object-cover"
          />
        </div>

        {/* Right side: Share Button */}
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-200 shadow"
          >
            <IoMdShare className="text-xl" />
            <span className="hidden md:block">Share</span>
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Navbar;
