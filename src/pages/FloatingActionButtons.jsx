import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaChevronUp } from 'react-icons/fa';

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "917995519988";
  const message = "Hi, I’m interested in your services!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp Button */}
      {isOpen && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      )}

      {/* Call Button */}
      {isOpen && (
        <a
          href={`tel:${phoneNumber}`}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      )}

      {/* Toggle Arrow Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaChevronUp className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export default FloatingActionButtons;
