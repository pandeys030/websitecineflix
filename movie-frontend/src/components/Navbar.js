// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">CineFlix</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/my-list">My List</Link>
        </li>
        <li>
          <Link to="/join-now">Join Now</Link>  {/* Add link for Join Now */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
