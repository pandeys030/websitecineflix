import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addToMyList } from "../services/api";
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();  // movieId comes from the URL, which is MongoDB's _id
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/movies/${movieId}`);
        if (response.data) {
          setMovie(response.data);
          setLoading(false);
        } else {
          setError('Movie not found');
          setLoading(false);
        }
      } catch (error) {
        setError('Error fetching movie details');
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const handleWatchTrailer = () => {
    if (movie && movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    } else {
      alert('Trailer not available for this movie.');
    }
  };

  const handleAddToList = async () => {
    console.log('Fetching movie with ID:', movieId);
    try {
      const response = await addToMyList(movie._id);  // Use MongoDB's _id here
      alert(response.data);
    } catch (error) {
      alert('Failed to add movie to list');
    }
  };

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <div className="details-content">
        <img src={movie.poster || "/path/to/default-image.jpg"} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <p className="release-date">Release Date: {movie.releaseDate}</p>
            <p className="director">Director: {movie.director}</p>
          </div>
          <div className="genre-tags">
            {movie.genre && movie.genre.map(g => (
              <span key={g} className="genre-tag">{g}</span>
            ))}
          </div>
          <p className="description">{movie.description}</p>
          <div className="rating">
            <h3>Rating</h3>
            <p>{movie.rating}</p>
          </div>
          <div className="action-buttons">
            <button className="play-button">Play</button>
            <button onClick={handleAddToList}>Add to List</button>
            <button className="watch-trailer" onClick={handleWatchTrailer}>Watch Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
