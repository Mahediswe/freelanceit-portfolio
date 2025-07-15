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

import React from 'react'
import { IoMdShare } from "react-icons/io";
import logo from "../assetes/Logo.jpeg"

const Navbar = () => {
  return (
    <div className='max-w-3xl mx-auto flex justify-between items-center px-4 py-3 bg-violet-400'>
      
      {/* Left side: Logo + Title */}
      <div className='flex items-center gap-4'>
        <img 
          src={logo} 
          alt="Logo" 
          className='w-full h-16 rounded-lg object-cover'
        />
        <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
          Frelance Digital It
        </h1>
      </div>

      {/* Right side: Icon Button */}
      <div>
        <button className='text-blue-600 hover:text-blue-800 transition'>
          <IoMdShare className='w-8 h-8 md:w-10 md:h-10' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
