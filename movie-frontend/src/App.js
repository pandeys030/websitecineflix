// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import JoinNow from './pages/JoinNow';  // Import JoinNow component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/join-now" element={<JoinNow />} />  {/* Add JoinNow route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
