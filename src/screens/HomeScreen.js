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
fetchURL={'/getMovies/NetflixOriginals'}
isLargeRow
    />
    <Row title="TRENDING NOW"fetchURL={'/getMovies/trending'} />
    <Row title="TOP RATED"fetchURL={'/getMovies/TopRated'} />
      <Row title="ACTION MOVIES"fetchURL={'/getMovies/ActionMovies'} />
      <Row title="COMEDY MOVIES"fetchURL={'/getMovies/ComedyMovies'} />
     <Row title="HORROR MOVIES"fetchURL={'/getMovies/HorrorMovies'} />
 <Row title="ROMANCE MOVIES"fetchURL={'/getMovies/RomanceMovies'} />
 <Row title="DOCUMENTARIES"fetchURL={'/getMovies/Documentaries'} />
    </div>
    </div>
  );
}

export default HomeScreen