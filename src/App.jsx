import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails';
import HomePage from './pages/HomePage';
import SearchedMoviePage from './pages/SearchedMoviePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import ErrorBoundary from './components/ErrorBoundary';



 function App() {
  return <>
      <Router>
        <ErrorBoundary>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/top-rated" element={<TopRatedPage/>} />
            <Route path="/upcoming" element={<UpcomingPage/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
            <Route path="/search" element={<SearchedMoviePage/>} />
          </Routes>
        </ErrorBoundary>
      </Router>
  </>
 }

export default App
