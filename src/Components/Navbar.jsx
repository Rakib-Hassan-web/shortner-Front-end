import React from 'react';
import { IoHome, IoLogIn } from 'react-icons/io5';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-6 py-4 shadow-lg backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
   
        <Link     to="/"  className="text-2xl font-extrabold text-white">
          🔗 MyApp
        </Link>

      
        <div className="flex gap-6 text-white font-medium">
        

          <Link 
            to="/" 
            className="hover:text-yellow-400 transition-colors flex items-center gap-1 "
          >  <IoHome />
            Home
          </Link>
          <Link 
            to="/Login" 
            className="hover:text-yellow-300 transition-colors flex items-center gap-1"
          >
            <IoLogIn />

            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
