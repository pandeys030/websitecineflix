// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { addToMyList } from '../services/api';

// import './MovieDetails.css';

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const navigate = useNavigate();

//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [addError, setAddError] = useState(null);
//   const [isAdded, setIsAdded] = useState(false); // State to track if the movie was added successfully

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/api/movies/${movieId}`);
//         if (response.data) {
//           setMovie(response.data);
//           setLoading(false);
//         } else {
//           setError('Movie not found');
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//         setError('Error fetching movie details');
//         setLoading(false);
//       }
//     };

//     fetchMovie();
//   }, [movieId]);

//   const handleWatchTrailer = () => {
//     if (movie && movie.trailerUrl) {
//       window.open(movie.trailerUrl, '_blank');
//     } else {
//       alert('Trailer not available for this movie.');
//     }
//   };

//   const handleAddToList = async () => {
//     // Prevent multiple clicks
//     if (isAdding || isAdded) return;

//     setIsAdding(true);
//     setAddError(null);

//     try {
//       const response = await addToMyList(movie.id, movie.title);
//       console.log("Movie added:", response);
//       setIsAdded(true); // Mark as added to prevent further clicks
//       navigate('/my-list'); // Redirect to "My List" page after adding
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setAddError("Movie is already in your list.");
//       } else {
//         setAddError("Error adding movie to My List.");
//       }
//       console.error("Error adding movie to My List:", error);
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   if (loading) return <p>Loading movie details...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="movie-details">
//       <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
//       <div className="details-content">
//         <img src={movie.poster || "/path/to/default-image.jpg"} alt={movie.title} className="movie-poster" />
//         <div className="movie-info">
//           <h1>{movie.title}</h1>
//           <div className="movie-meta">
//             <p className="release-date">Release Date: {movie.releaseDate}</p>
//             <p className="director">Director: {movie.director}</p>
//           </div>
//           <div className="genre-tags">
//             {movie.genre && movie.genre.map((g) => (
//               <span key={g} className="genre-tag">{g}</span>
//             ))}
//           </div>
//           <p className="description">{movie.description}</p>
//           <div className="rating">
//             <h3>Rating</h3>
//             <p>{movie.rating}</p>
//           </div>
//           <div className="action-buttons">
//             <button className="play-button">Play</button>
//             <button onClick={handleAddToList} disabled={isAdding || isAdded}>
//               {isAdded ? 'Added' : isAdding ? 'Adding...' : 'Add to List'}
//             </button>
//             <button className="watch-trailer" onClick={handleWatchTrailer}>Watch Trailer</button>
//           </div>
//           {addError && <p className="error-message">{addError}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addToMyList, getMyList } from '../services/api'; // Added `getMyList` API call

import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [addError, setAddError] = useState(null);
  const [isAdded, setIsAdded] = useState(false); // State to track if the movie was added successfully

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

    // Check if the movie is already in the user's list when the page loads
    const checkIfMovieAdded = async () => {
      try {
        const response = await getMyList(); // Fetch the user's list of movies
        const isMovieInList = response.data.some(item => item.movieId === movieId);
        setIsAdded(isMovieInList); // Update state if the movie is already in the list
      } catch (error) {
        console.error("Error checking user's movie list:", error);
      }
    };

    fetchMovie();
    checkIfMovieAdded(); // Check if movie is in the list on page load
  }, [movieId]);

  const handleWatchTrailer = () => {
    if (movie && movie.trailerUrl) {
      window.open(movie.trailerUrl, '_blank');
    } else {
      alert('Trailer not available for this movie.');
    }
  };

  const handleAddToList = async () => {
    // Prevent multiple clicks
    if (isAdding || isAdded) return;

    setIsAdding(true);
    setAddError(null);

    try {
      const response = await addToMyList(movie.id, movie.title);
      console.log("Movie added:", response);
      setIsAdded(true); // Mark as added to prevent further clicks
      navigate('/my-list'); // Redirect to "My List" page after adding
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setAddError("Movie is already in your list.");
      } else {
        setAddError("Error adding movie to My List.");
      }
      console.error("Error adding movie to My List:", error);
    } finally {
      setIsAdding(false);
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
