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
        const response = await axios.get(`http://localhost:3001/api/movies`);
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
    latest: [...movies].sort((a, b) => parseInt(b.releaseDate) - parseInt(a.releaseDate || '0')).slice(0, 5),
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <Navbar />
      <Hero featuredMovie={movies[0]} />
      
      <div className="movie-sections">
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

        <section className="movie-list">
          <h2>Sci-Fi Adventures</h2>
          <Slider {...settings}>
            {categories.sciFi.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Drama</h2>
          <Slider {...settings}>
            {categories.drama.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Comedy</h2>
          <Slider {...settings}>
            {categories.comedy.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Animation</h2>
          <Slider {...settings}>
            {categories.animation.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Horror</h2>
          <Slider {...settings}>
            {categories.horror.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Romance</h2>
          <Slider {...settings}>
            {categories.romance.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Documentaries</h2>
          <Slider {...settings}>
            {categories.documentary.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Fantasy</h2>
          <Slider {...settings}>
            {categories.fantasy.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Mystery</h2>
          <Slider {...settings}>
            {categories.mystery.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>

        <section className="movie-list">
          <h2>Thriller</h2>
          <Slider {...settings}>
            {categories.thriller.map(movie => (
              <div key={movie._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default Home;
