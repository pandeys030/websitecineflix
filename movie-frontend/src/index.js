// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // New import for React 18+ root API
import './index.css';  // Import global styles (optional)
import App from './App'; // Import the root component of your app

// Create a root container using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Render the React application inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
