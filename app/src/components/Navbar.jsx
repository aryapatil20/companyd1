import React from 'react';
import { FaHome, FaSearch, FaBell, FaUserCircle, FaEdit } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className="icon-menu">
        <FaHome title="Home" />
        <FaSearch title="Search" />
        <FaBell title="Notifications" />
        <FaUserCircle title="Profile" />
        <Link to="/form" className="icon-link" title="Open Form">
          <FaEdit />
        </Link>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
