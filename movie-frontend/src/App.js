// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import JoinNow from './pages/JoinNow';
import Login from './pages/Login';
import SearchPage from './pages/SearchPage';  // Import SearchPage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchPage />} />  {/* Add SearchPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
