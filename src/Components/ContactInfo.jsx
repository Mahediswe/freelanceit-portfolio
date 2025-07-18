import React from 'react';
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <MdCall className="text-green-600 w-6 h-6" />,
      title: "Call",
      subtitle: "+8801819836486",
      link: "tel:+8801819836486",
    },
    {
      icon: <FaWhatsapp className="text-green-600 w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "Connect on WhatsApp",
      link: "https://wa.me/8801819836486",
    },
    {
      icon: <MdEmail className="text-red-600 w-6 h-6" />,
      title: "Email",
      subtitle: "adriyanayon@gmail.com",
      link: "mailto:adriyanayon@gmail.com",
    },
    {
      icon: <FaGlobe className="text-blue-600 w-6 h-6" />,
      title: "Website",
      subtitle: "www.freelancedigitalit.com",
      link: "https://www.freelancedigitalit.com",
    },
    {
      icon: <FaFacebook className="text-blue-700 w-6 h-6" />,
      title: "Facebook",
      subtitle: "View Facebook Profile",
      link: "https://facebook.com",
    },
    {
      icon: <FaInstagram className="text-pink-600 w-6 h-6" />,
      title: "Instagram",
      subtitle: "Follow on Instagram",
      link: "https://instagram.com",
    },
    {
      icon: <FaYoutube className="text-red-600 w-6 h-6" />,
      title: "YouTube",
      subtitle: "View YouTube Channel",
      link: "https://youtube.com",
    },
    {
      icon: <MdLocationOn className="text-purple-600 w-6 h-6" />,
      title: "Location",
      subtitle: "39, Nawab Ali Road, Akua Goru Khaner Mor, Mymensingh",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 bg-slate-100">
      {contactItems.map((item, index) => (
        <a 
          href={item.link} 
          key={index} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-start gap-4 bg-white shadow-sm p-4 rounded-md hover:shadow-md transition"
        >
          <div className="mt-1 text-3xl">
            {item.icon}
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
            <p className="text-md text-gray-600">{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
