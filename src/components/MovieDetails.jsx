import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&langauge=en-US`);
      const data = await res.json();
      setMovie(data);
      console.log(data);
    }
  
    fetchMovies();
  }, [id])
  


  return (
    <div className="movie-details">
      <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <p className="overview">{movie.overview}</p>
        <p>
          📅 Release Date: <span>{movie.release_date}</span>
        </p>
        <p>
          ⭐ Rating: <span>{movie.vote_average}</span>
        </p>
      </div>
    </div>
  )
}

export default MovieDetails