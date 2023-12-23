import React, { useState, useEffect } from 'react';
import "./Banner.css";
import axios from './axios';
import requests from './Requests';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

function Banner() {
const [movie, setMovies] = useState([]);

useEffect(() => {
  const fetchGenres = async () => {
    try {
      const response = await api.get('/trending'); 
     // console.log(response.data);
      const request = await tmdb.get(response.data.id);
      //console.log(request.data);
      setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      //setGenres(response.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  fetchGenres();
}, []);



// useEffect(()=>{
//   async function fetchData(){
//     try {
//       if (Array.isArray(genres) && genres.length > 0) {
//         const request = await tmdb.get(genres[0]?.id);
//         //console.log("MOVIEEES : " + request.data);
//         setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
//       } else {
//         console.error('Genres is undefined or empty.');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   fetchData();
//   },[])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...': string;
    }

  return <header className="banner" style={{
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  }}>

<div className="banner__contents">
  <h1 className="banner__title">{movie?.tittle || movie?.name || movie?.original_name}</h1>    
  <div className="banner__buttons">
    <button className='banner_button'>Play</button>
    <button className='banner_button'>My List</button>
  </div>
  <h1 className="banner_description">{truncate(
    movie?.overview
  , 150)}
  </h1>
</div>

<div className='banner--fadeBottom' />
  </header>;

}

export default Banner;