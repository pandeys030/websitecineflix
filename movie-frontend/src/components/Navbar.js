// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    navigate('/search');  // Navigate directly to the search page
    setSearchOpen(false);  // Close the search input if open
  };

  return (
    <div className="navbar">
      <h1 className="navbar-logo">CineFlix</h1>

      <ul className="navbar-links">
        <li><Link to="/fun-fact-page">Fun Facts</Link></li>
        <li><Link to="/my-list">My List</Link></li>
        <li><Link to="/join-now">Join Now</Link></li>
      </ul>

      <div className="navbar-search-container">
        <span className="search-icon" onClick={handleSearchIconClick}>🔍</span>

        {searchOpen && (
          <form onSubmit={handleSearchIconClick} className="navbar-search-form">
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
