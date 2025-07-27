import React from 'react';
import { FaCheck, FaTrash, FaArchive } from 'react-icons/fa';

const messages = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Hello! I wanted to talk about a new project.',
    time: '10:30 AM',
  },
  {
    id: 2,
    name: 'Jane Smith',
    message: 'Please check the attached document.',
    time: '11:15 AM',
  },
   {
    id: 3,
    name: 'John Doe',
    message: 'Hello! I wanted to talk about a new project.',
    time: '10:30 AM',
  },
  {
    id: 4,
    name: 'Jane Smith',
    message: 'Please check the attached document.',
    time: '11:15 AM',
  },
  // more dummy data
];

const ShowMessages = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Inbox</h2>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 p-4 group flex items-center justify-between"
          >
            <div className='flex flex-row gap-x-10'>
              <h4 className="font-bold text-gray-800 text-lg">{msg.name}</h4>
              <p className="text-gray-600 text-md">
                {msg.message.slice(0, 40)}...
              </p>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </div>

            {/* Buttons on hover */}
            <div className="hidden group-hover:flex gap-2 absolute right-4 top-4">
              <button className="text-green-600 hover:text-green-800">
                <FaCheck />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <FaTrash />
              </button>
              <button className="text-blue-600 hover:text-blue-800">
                <FaArchive />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowMessages;
