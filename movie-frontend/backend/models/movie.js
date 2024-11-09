import mongoose from 'mongoose';


// Define the schema for the movies collection
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: [String], required: true },
  rating: { type: String, required: true },
  director: { type: String, required: true },
  description: { type: String, required: true },
  trailerUrl: { type: String, required: true }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);  // Create the Movie model
module.exports = Movie;
