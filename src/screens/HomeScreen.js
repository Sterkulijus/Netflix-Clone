import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import React, { useEffect, useState } from 'react';
import  {colRef}from '../firebase'; 
import {  onSnapshot,query,where } from 'firebase/firestore';
import Row from '../Row';
import requests from '../Requests';

function HomeScreen() {
  // const [scifi, setSciFi] = useState([]);
  // const [horror, setHorror] = useState([]);
  // const [comedy, setComedy] = useState([]);
  // const qSciFi = query(colRef, where("genres", "==", "Sci-Fi"))
  // const qHorror = query(colRef, where("genres", "==", "Horror"))
  // const qComedy = query(colRef, where("genres", "==", "Comedy"))

  // useEffect(() => {
  //   // Assuming getBasicsData is a function that fetches data from Firebase
  //   const unsubscribe = onSnapshot(qSciFi,(snapshot)=>{ // if whole table is needed just pass in colRef
  //     let basics = []
  //     snapshot.docs.forEach((doc)=>{
  //       basics.push({...doc.data(),id: doc.id})
  //     })
  //    // console.log(basics)
  //    setSciFi(basics);
  //     })    // Clean up the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   // Assuming getBasicsData is a function that fetches data from Firebase
  //   const unsubscribe = onSnapshot(qHorror,(snapshot)=>{ // if whole table is needed just pass in colRef
  //     let basics = []
  //     snapshot.docs.forEach((doc)=>{
  //       basics.push({...doc.data(),id: doc.id})
  //     })
  //    // console.log(basics)
  //    setHorror(basics);
  //     })    // Clean up the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, []);


  // useEffect(() => {
  //   // Assuming getBasicsData is a function that fetches data from Firebase
  //   const unsubscribe = onSnapshot(qComedy,(snapshot)=>{ // if whole table is needed just pass in colRef
  //     let basics = []
  //     snapshot.docs.forEach((doc)=>{
  //       basics.push({...doc.data(),id: doc.id})
  //     })
  //    // console.log(basics)
  //    setComedy(basics);
  //     })    // Clean up the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, []);




  return (
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

    {/* <Row
    title="SCI-FI"
fetchURL={scifi}
isLargeRow
    />
    <Row
    title="HORROR"
fetchURL={horror}
    />
     <Row
    title="COMEDY"
fetchURL={comedy}
    /> */}


  </div>
  );
}

export default HomeScreen