import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/movies');
        setMovies(response.data);
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const categories = {
    latest: [...movies].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 5),
    action: movies.filter(movie => movie.genre?.includes('Action')),
    sciFi: movies.filter(movie => movie.genre?.includes('Science Fiction')),
    drama: movies.filter(movie => movie.genre?.includes('Drama')),
    comedy: movies.filter(movie => movie.genre?.includes('Comedy')),
    animation: movies.filter(movie => movie.genre?.includes('Animation')),
    horror: movies.filter(movie => movie.genre?.includes('Horror')),
    romance: movies.filter(movie => movie.genre?.includes('Romance')),
    documentary: movies.filter(movie => movie.genre?.includes('Documentary')),
    fantasy: movies.filter(movie => movie.genre?.includes('Fantasy')),
    mystery: movies.filter(movie => movie.genre?.includes('Mystery')),
    thriller: movies.filter(movie => movie.genre?.includes('Thriller')),
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <Navbar />
      <Hero featuredMovie={movies[0]} />
      
      <div className="movie-sections">
        {/* Popular Movies */}
        <section className="movie-list">
          <h2>Popular Movies</h2>
          <Slider {...settings}>
            {movies.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        {/* Latest Releases */}
        <section className="movie-list">
          <h2>Latest Releases</h2>
          <Slider {...settings}>
            {categories.latest.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        {/* Action Movies */}
        <section className="movie-list">
          <h2>Action Movies</h2>
          <Slider {...settings}>
            {categories.action.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>
        {/* Repeat for other categories */}
      </div>
    </div>
  );
};

export default Home;
