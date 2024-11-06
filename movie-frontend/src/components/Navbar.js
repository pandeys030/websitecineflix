// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');  // Reset the search input after navigation
    }
  };

  return (
    <div className="navbar">
      <h1 className="navbar-logo">CineFlix</h1>

      <ul className="navbar-links">
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/my-list">My List</Link></li>
        <li><Link to="/join-now">Join Now</Link></li>
      </ul>

      {/* Search Icon and Overlay Input */}
      <div className="navbar-search-container">
        <span className="search-icon" onClick={() => setSearchOpen(!searchOpen)}>🔍</span>
        {searchOpen && (
          <form onSubmit={handleSearchSubmit} className="navbar-search-form">
            <input
              type="text"
              placeholder="Titles, genres, people"
              className="navbar-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
