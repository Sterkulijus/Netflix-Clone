import React, { useDebugValue, useEffect,useState } from 'react'
import './Row.css'
import axios from './axios';
import requests from './Requests';

function Row({title,fetchURL,isLargeRow = false}) {
const [movies, setMovies] = useState([]);

const base_url = "https://image.tmdb.org/t/p/original/";

useEffect(()=>{
async function fetchData(){
  const requests = await axios.get(fetchURL);
  setMovies(requests.data.results);
  return requests;
}
fetchData();
},[fetchURL])


return (
  <div className='row'>
    <h2 style={{ color: 'white' }}>{title}</h2>
    <div className="row__posters">  
      {movies.map(movie => (
        <div key={movie.name} className="movie__container">
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          <p className="movie__text">{movie.originalTitle}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Row

//originalTitle