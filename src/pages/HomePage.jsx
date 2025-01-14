import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './HomePage.css'; 

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="homepage">
      <h2 className="homepage-title">🎬 Popular Movies</h2>
      <div className="display-flex">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;


/*

Memoization : Memoization is an  optimization technique that helps to improve performance 
by caching the results of expensive function calls and resuing the catched result 
when the same inputs occur again


Memoization ek aisa technique hai jo result ko ek jagah save karke, kaam ko help karne 
mai improve karta hai, yani kabi bhi result chahiye rahega to waha se direct result se 
le sakte hai, isse kaam karne mai easy hota hai.

function Child({props}){
  displaying props
}

function Parent(){
  const [props, setProps] = useState(0);
  setProps(10);
  <child props=props/>
}

const = Child = React.memo( function Child({props}){
  displaying props
})

*/