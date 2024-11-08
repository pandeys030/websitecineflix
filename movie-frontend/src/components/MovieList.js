// import React, { useEffect, useState } from 'react';

// const MovieList = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3001/api/movies") // URL to your backend endpoint
//             .then(response => response.json())
//             .then(data => setMovies(data))
//             .catch(error => console.error("Error fetching movies:", error));
//     }, []);

//     return (
//         <div>
//             <h1>Movie List</h1>
//             <ul>
//                 {movies.length > 0 ? (
//                     movies.map(movie => (
//                         <li key={movie._id}>{movie.title}</li> // Use movie._id as a unique key
//                     ))
//                 ) : (
//                     <p>No movies available.</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default MovieList;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/api/movies") // URL to your backend endpoint
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("Error fetching movies:", error));
    }, []);

    // Function to handle "Watch Trailer" button click
    const handleWatchTrailer = (trailerUrl) => {
        window.open(trailerUrl, '_blank');  // Opens the trailer URL in a new tab
    };

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <li key={movie._id}>
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p> {/* Display movie description */}
                            <button onClick={() => navigate(`/movie/${movie._id}`)}>View Details</button>
                            <button onClick={() => handleWatchTrailer(movie.trailerUrl)}>Watch Trailer</button> {/* Watch Trailer Button */}
                        </li>
                    ))
                ) : (
                    <p>No movies available.</p>
                )}
            </ul>
        </div>
    );
};

export default MovieList;
