import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">🎥 MovieFlex</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="links">
        <a href="/" className="nav-link">Popular</a>
        <a href="/top-rated" className="nav-link">Top Rated</a>
        <a href="/upcoming" className="nav-link">Upcoming Movie</a>
      </div>
    </nav>
  );
};

export default Navbar;
