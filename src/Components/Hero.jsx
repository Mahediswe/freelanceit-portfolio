// import React from "react";
// import profile from "../assetes/profile.jpg";
// import hero from "../assetes/hero.jpg";

// const Hero = () => {
//   return (
//     <div className="max-w-3xl mx-auto">
//       <div>
//         <img src={hero} alt="" className="w-full" />
//       </div>
//       <div className="p-10 m-5 bg-slate-300">
//         <div>
//           <h1 className="text-center text-1xl">Adriyan Ayon</h1>
//           <h1 className="text-center text-lg">Freelance Digital IT (CEO)</h1>
//           <p>
//             Hello! My name is Adriyan Ayon, and I'm a professional digital
//             marketer. I have more than 3 years of experience in this field. I
//             have acquired the skills and knowledge necessary to make your
//             project a success.
//           </p>
//         </div>
//         <div className="flex flex-row items-center">
//           <button className="bg-orange-400 hover:bg-orange-700 rounded-xl p-3 m-3">
//             Save to Phone
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-700 rounded-xl p-3 m-3">
//             Share to Friend
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import profile from "../assetes/profile.jpg";
import hero from "../assetes/hero.jpg";
import ShareModal from "./ShareModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Top Hero Image */}
      <div className="h-100 overflow-hidden ">
        <img
          src={hero}
          alt="Banner"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Profile Picture (Floating) */}
      <div className="absolute top-[26%] sm:top-16 md:top-72 lg:top-80 left-1/2 -translate-x-1/2 transform animate-float">
        <img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Bottom Info Section */}
      <div className="bg-gray-300 pb-10 px-6 pt-24 shadow-md">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Adriyan Ayon</h1>
          <h2 className="text-lg text-blue-600 font-semibold">
            Freelance Digital IT (CEO)
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xl mx-auto">
            Hello! My name is Adriyan Ayon, and I'm a professional digital
            marketer. I have more than 3 years of experience in this field. I
            have acquired the skills and knowledge necessary to make your
            project a success.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/adriyan-ayon.vcf"
            download
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition inline-block"
          >
            Save to Phone
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Share to Friend
          </button>
          <ShareModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
