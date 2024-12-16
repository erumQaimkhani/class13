

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 flex flex-col items-center">
     
      <div className="flex space-x-4">
        <a
          href="https://github.com/erumQaimkhani/hackthon24hr.github.io"
          target="www.linkedin.com/in/erum-qaimkhani-529aa4234"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="www.linkedin.com/in/erum-qaimkhani-529aa4234/"
          target=""
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="text-gray-300 text-sm mt-4">
        &copy; {new Date().getFullYear()} Erum Qaimkhani. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

  