import React from 'react';
import { FaHome, FaSearch, FaBell, FaUserCircle, FaRocket } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo/Icon */}
      <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
        <FaRocket />
        <span>MyApp</span>
      </div>

      {/* Icon Menu */}
      <div className="flex items-center gap-6 text-gray-600 text-xl">
        <FaHome className="hover:text-blue-500 cursor-pointer" title="Home" />
        <FaSearch className="hover:text-blue-500 cursor-pointer" title="Search" />
        <FaBell className="hover:text-blue-500 cursor-pointer" title="Notifications" />
        <FaUserCircle className="hover:text-blue-500 cursor-pointer" title="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
