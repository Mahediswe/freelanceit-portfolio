import React, { useState } from 'react';
import { FaCheck, FaTrash, FaArchive } from 'react-icons/fa';

const messages = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Hello! I wanted to talk about a new project. Let me know when you are available for a quick call.',
    time: '10:30 AM',
  },
  {
    id: 2,
    name: 'Jane Smith',
    message: 'Please check the attached document regarding our next steps and provide your feedback.',
    time: '11:15 AM',
  },
   {
    id: 3,
    name: 'John Doe',
    message: 'Hello! I wanted to talk about a new project. Let me know when you are available for a quick call.',
    time: '10:30 AM',
  },
  {
    id: 4,
    name: 'Jane Smith',
    message: 'Please check the attached document regarding our next steps and provide your feedback.',
    time: '11:15 AM',
  },
];

const ShowMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleClose = () => setSelectedMessage(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Inbox</h2>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 p-4 group flex items-center justify-between cursor-pointer"
            onClick={() => setSelectedMessage(msg)}
          >
            <div className='flex flex-row gap-10'>
              <h4 className="font-bold text-xl text-gray-800">{msg.name}</h4>
              <p className="text-gray-600 text-md">
                {msg.message.slice(0, 40)}...
              </p>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </div>

            <div className="hidden group-hover:flex gap-2 absolute right-4 top-4 z-10">
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

      {/* Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <h3 className="text-xl font-semibold mb-2">{selectedMessage.name}</h3>
            <p className="text-gray-700 mb-4">{selectedMessage.message}</p>
            <span className="text-xs text-gray-400 block mb-4">{selectedMessage.time}</span>
            <button
              onClick={handleClose}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMessages;
