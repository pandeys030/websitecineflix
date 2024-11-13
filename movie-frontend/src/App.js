// src/App.js

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import FunFacts from './pages/FunFactPage';
import Home from './pages/Home';
import JoinNow from './pages/JoinNow'; 
import Login from './pages/Login';
import MyList from './pages/MyList';

import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/join-now" element={<JoinNow />} />  {/* Add JoinNow route */}
          <Route path="/fun-fact-page" element={<FunFacts />} /> 
          <Route path="/my-list" element={<MyList />} />
       
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
