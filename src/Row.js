import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';

const apii = axios.create({
  baseURL: "http://localhost:8888"
});

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";


  
  useEffect(() => {
    async function fetchData() {
      const requests = await apii.get(fetchURL);
      console.log(requests.data);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchURL]);

  const handleMovieClick = (movie) => {
    console.log(movie);
    setSelectedMovie(movie);
  };

  return (
    <div className='row'>
      <h2 style={{ color: 'white' }}>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div key={movie.name} className="movie__container" onClick={() => handleMovieClick(movie)}>
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
            <p className="movie__text">{movie.originalTitle}</p>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="selectedMovieDetails">
          <img
            className={`selectedMoviePoster ${isLargeRow && "selectedMoviePosterLarge"}`}
            src={`${base_url}${isLargeRow ? selectedMovie.poster_path : selectedMovie.backdrop_path}`}
            alt={selectedMovie.name}
          />
          <ul>
            <li>{`Title: ${selectedMovie.original_title}`}</li>
            <li>{`Release Date: ${selectedMovie.release_date}`}</li>
            <li>{`Rating: ${selectedMovie.vote_average}`}</li>
            <li>{`${selectedMovie.overview}`}</li>
            {/* Add more attributes as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Row;