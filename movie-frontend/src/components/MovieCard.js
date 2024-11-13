
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/movies/${movie._id}`);
  };

  return (
    <div className="movie-card" onClick={goToDetails}>
      <img className="movie-poster" src={movie.poster || "/path/to/default-image.jpg"} alt={movie.title} />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
};

export default MovieCard;
