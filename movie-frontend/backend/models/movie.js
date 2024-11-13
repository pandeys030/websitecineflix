const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  releaseDate: Date,
  director: String,
  description: String,
  poster: String,
  rating: Number,
  trailerUrl: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
