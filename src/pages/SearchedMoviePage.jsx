import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';


const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';


// language=en-US&page=1 => query parameters
// cart/2/ => body parameters is 2

/*

useLocation is a React Router hook that returns  the current location object.
The location object contains information about the current URL and how the current route was reached.


*/

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const SearchedMoviePage = () => {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery().get('query');


  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        setLoading(true);
        try {
          const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
          const data = await response.json();
          setMovies(data.results || []);
          console.log(data.results);
        } catch (error) {
          console.error('Failed to fetch movies', error);
        } finally{
          setLoading(false);
        }
      }
    };
    fetchMovies();
  
  }, [query])
  

  return (
    <div className='Searched-movies-page'>
      <h2>Searched Results</h2>
      {loading ? <p>Loading...</p> : movies.length > 0 ? (
        <div className='movies-grid'>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
    </div>
      ) : (
        <p>No movies found "{query}"</p>
      )}
    </div>
  );
};

export default SearchedMoviePage


/* 
 Error Boundary: These are special components that catch users is any part of their
*/