import React, { useState, useEffect } from 'react';
import "./Banner.css";
import axios from './axios';
import requests from './Requests';
function Banner() {
const [movie, setMovies] = useState([]);

const apii = axios.create({
  baseURL: "http://localhost:8888"
});

useEffect(()=>{
  async function fetchData(){
    const request = await apii.get('/getMovies/trending');
    setMovies(request.data.results[Math.floor(Math.random()* request.data.results.length-1)]);
    return request;
  }
  fetchData();
  },[])

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