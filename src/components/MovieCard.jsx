import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieCard = React.memo(({movie}) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`} className="movie">
        <img src={`${IMG_PATH}/${movie.poster_path}`} alt={movie.title} />
        {/* <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p> */}
      </Link>
      <hr />
      <br />
    </div>
  )
})

export default MovieCard



/* 

A component that determines whether to re-render itself based on state or props is Purecomponent.

*/







