import React, { useEffect, useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/movies") // URL to your backend endpoint
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <li key={movie._id}>{movie.title}</li> // Use movie._id as a unique key
                    ))
                ) : (
                    <p>No movies available.</p>
                )}
            </ul>
        </div>
    );
};

export default MovieList;
