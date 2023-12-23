import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import React, { useEffect, useState } from 'react';
import  {colRef}from '../firebase'; 
import {  onSnapshot,query,where } from 'firebase/firestore';
import Row from '../Row';
import requests from '../Requests';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

function HomeScreen() {

  const [genres, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await api.get('/genres'); 
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);
  return (
    <div>
  <div className='homeScreen'>
    <Nav/>

    <Banner />

<Row
    title="NTUAFLIX ORIGINALS"
    fetchURL={genres && genres[1]?.id}
isLargeRow
    />
    <Row title="TRENDING NOW"fetchURL={genres && genres[0]?.id} />
    <Row title="TOP RATED"fetchURL={genres && genres[2]?.id} />
      <Row title="ACTION MOVIES"fetchURL={genres && genres[3]?.id} />
      <Row title="COMEDY MOVIES"fetchURL={genres && genres[4]?.id} />
     <Row title="HORROR MOVIES"fetchURL={genres && genres[5]?.id} />
     <Row title="ROMANCE MOVIES"fetchURL={genres && genres[6]?.id} />
 <Row title="DOCUMENTARIES"fetchURL={genres && genres[7]?.id} />
    </div>
    </div>
  );
}

export default HomeScreen