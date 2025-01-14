import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './UpcomingPage.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchUpcomingMovies();
  }, []);

  return (
    <div className="upcoming-page">
      <h2>Upcoming Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
