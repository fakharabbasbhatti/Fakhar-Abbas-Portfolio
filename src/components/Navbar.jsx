import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <a href="#" className="text-3xl font-semibold">
          BHATTI
        </a>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <RxCross2 /> : <IoMenu />}
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center md:space-x-6 bg-black md:bg-transparent absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto z-10 transition-all duration-300`}
        >
          <a
            href="#home"
            className="block py-2 md:py-0 px-4 hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 md:py-0 px-4 hover:text-blue-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#service"
            className="block py-2 md:py-0 px-4 hover:text-blue-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#project"
            className="block py-2 md:py-0 px-4 hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 md:py-0 px-4 hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Submit Button */}
        <button className="hidden md:block px-4 py-2 bg-transparent hover:bg-gradient-to-r from-green-600 to-blue-600 border border-blue rounded hover:text-white transition">
          Submit
        </button>
      </div>
    </header>
  );
};

export default Navbar;
