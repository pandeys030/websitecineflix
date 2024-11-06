// src/components/MovieCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'; // Make sure to create/modify this file accordingly.

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={goToDetails}>
      <img className="movie-poster" src={movie.poster} alt={movie.title} />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
};

export default MovieCard;
