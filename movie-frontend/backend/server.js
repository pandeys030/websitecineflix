import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movieRoutes.js'; // Import movie routes
import myListRoutes from './routes/myListRoutes.js'; // Import my list routes

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON data in the request body

// API Routes
app.use('/api/movies', movieRoutes); // Route for movie-related actions
app.use('/api/myList', myListRoutes); // Route for My List actions

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
