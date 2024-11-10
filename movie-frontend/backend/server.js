// server.js
import cors from 'cors';
import express from 'express';
import connectDB from './config/db.js'; // Default import for connectDB
import movieRoutes from './routes/movieRoutes.js'; // Import movie routes
import myListRoutes from './routes/myListRoutes.js'; // Import my list routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON data in the request body

// API Routes
app.use('/api/movies', movieRoutes); // Route for movie-related actions
app.use('/api/my-list', myListRoutes); // Route for My List actions

// Connect to MongoDB
connectDB();

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
