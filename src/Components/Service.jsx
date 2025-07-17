import React from 'react';
import {
  FaBullhorn,
  FaChartLine,
  FaPencilRuler,
  FaChartPie,
  FaSearch,
  FaUsers,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaBullhorn className="w-8 h-8 text-indigo-600" />,
    title: "Digital Strategy",
    desc: "Smart plans for better growth.",
  },
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600" />,
    title: "Social Marketing",
    desc: "Targeted campaigns to engage.",
  },
  {
    icon: <FaSearch className="w-8 h-8 text-green-600" />,
    title: "SEO Boost",
    desc: "Rank higher on Google easily.",
  },
  {
    icon: <FaPencilRuler className="w-8 h-8 text-pink-600" />,
    title: "Content Creation",
    desc: "Visuals that speak to users.",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-purple-600" />,
    title: "Brand Building",
    desc: "Make your identity stand out.",
  },
  {
    icon: <FaChartPie className="w-8 h-8 text-red-600" />,
    title: "Analytics",
    desc: "Track & improve performance.",
  },
];

const Service = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-start text-center h-60"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
