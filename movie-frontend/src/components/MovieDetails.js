import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [addError, setAddError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const addToMyList = async (movie) => {
    try {
      await axios.post('http://localhost:3001/api/my-list', movie);
      alert('Movie added to your list!');
    } catch (error) {
      console.error('Error adding movie:', error);
      throw error;
    }
  };

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
        console.error('Error fetching movie details:', error);
        setError('Error fetching movie details');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const handleAddToList = async () => {
    if (isAdding || isAdded) return;

    setIsAdding(true);
    setAddError(null);

    try {
      await addToMyList(movie);
      setIsAdded(true);
      navigate('/my-list');
    } catch (error) {
      setAddError("Error adding movie to My List.");
    } finally {
      setIsAdding(false);
    }
  };

  // Define handleWatchTrailer here
  const handleWatchTrailer = () => {
    if (movie && movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    } else {
      alert('Trailer not available for this movie.');
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
            <p className="release-date">
              Release Year: {new Date(movie.releaseDate).getFullYear()}
            </p>
            <p className="director">Director: {movie.director}</p>
          </div>
          <div className="genre-tags">
            {movie.genre && movie.genre.map((g) => (
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
            <button onClick={handleAddToList} disabled={isAdding || isAdded}>
              {isAdded ? 'Added' : isAdding ? 'Adding...' : 'Add to List'}
            </button>
            <button className="watch-trailer" onClick={handleWatchTrailer}>Watch Trailer</button>
          </div>
          {addError && <p className="error-message">{addError}</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
