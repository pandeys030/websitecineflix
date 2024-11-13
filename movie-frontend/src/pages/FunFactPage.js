
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FunFactPage.css';

const FunFactPage = () => {
  const [funFacts, setFunFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the fun facts from the backend API
    axios.get('http://localhost:3001/api/funfact')
      .then((response) => {
        setFunFacts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="funfact-container">
      <h1>Movie Fun Facts</h1>
      <ul className="funfact-list">
        {funFacts.map((fact, index) => (
          <li key={index} className="funfact-item">
            <h3>{fact.title}</h3>
            <p>{fact.fact}</p>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FunFactPage;
