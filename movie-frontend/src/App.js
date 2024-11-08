// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';
import JoinNow from './pages/JoinNow';  // Import JoinNow component
import Login from './pages/Login';
import FunFacts from './pages/FunFactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join-now" element={<JoinNow />} />  {/* Add JoinNow route */}
          <Route path="/fun-fact-page" element={<FunFacts />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;