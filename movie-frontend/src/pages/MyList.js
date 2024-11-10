// src/pages/MyList.js
import axios from 'axios'; // Make sure axios is imported
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/my-list'); // Adjust URL if necessary
        console.log('Fetched movies:', response.data); 
        if (response.data) {
          setMyList(response.data); // Correctly use setMyList
          setLoading(false);
        } else {
          setError('No movies found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching your movies:', error);
        setError('Error fetching your movies');
        setLoading(false);
      }
    };
  
    fetchMovies();
  }, []);

  if (loading) return <p>Loading your list...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="list">
      <h1>My List</h1>
      <div className="movies-container">
        {myList.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
