import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this is react-router-dom, not react-router

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-6 py-4 shadow-lg backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link     to="/"  className="text-2xl font-extrabold text-white">
          🔗 MyApp
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-white font-medium">
          <Link 
            to="/" 
            className="hover:text-yellow-300 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/Login" 
            className="hover:text-yellow-300 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
