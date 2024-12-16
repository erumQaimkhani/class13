import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-3xl font-bold animate-pulse">MyBrand</div>
        </div>
        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
