// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FunFactPage from './pages/FunFactPage';  // Import the FunFactPage component
import JoinNow from './pages/JoinNow'; // Import the SearchPage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fun-fact-page" element={<FunFactPage />} />  // Updated to use FunFactPage
          <Route path="/join-now" element={<JoinNow />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
