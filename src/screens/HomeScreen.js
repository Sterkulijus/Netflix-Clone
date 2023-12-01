import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import React, { useEffect, useState } from 'react';
import  {colRef}from '../firebase'; 
import {  onSnapshot,query,where } from 'firebase/firestore';
import Row from '../Row';
import requests from '../Requests';

function HomeScreen() {


  return (
    <div>
  <div className='homeScreen'>
    <Nav/>

    <Banner />

<Row
    title="NTUAFLIX ORIGINALS"
fetchURL={requests.fetchNetflixOriginals}
isLargeRow
    />
    <Row title="TRENDING NOW"fetchURL={requests.fetchTrending} />
    <Row title="TOP RATED"fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIES"fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES"fetchURL={requests.fetchComedyMovies} />
     <Row title="HORROR MOVIES"fetchURL={requests.fetchHorrorMovies} />
 <Row title="ROMANCE MOVIES"fetchURL={requests.fetchRomanceMovies} />
    </div>
    </div>
  );
}

export default HomeScreen