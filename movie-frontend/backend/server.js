// server.js
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db.js'); // Default import for connectDB
const movieRoutes = require('./routes/movieRoutes.js'); // Import movie routes
const myListRoutes = require('./routes/myListRoutes.js'); // Import my list routes

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// API Routes
app.use('/api/movies', movieRoutes); // Route for movie-related actions
app.use('/api/my-list', myListRoutes); // Route for My List actions

// Connect to MongoDB
connectDB();

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
