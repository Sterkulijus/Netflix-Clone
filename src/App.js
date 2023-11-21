import React, { useEffect, useState } from 'react';
import HomeScreen from "./screens/HomeScreen";
import './firebase';
import './App.css';
import  {colRef}from './firebase'; 
import {  onSnapshot } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase.js'
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice.js';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user      
     dispatch(login({
       uid:userAuth.uid,
      email:userAuth.email
    }))
  } else {
    // User is signed out
    dispatch(logout());
  }
});
return unsubscribe;
},[dispatch])


  const [basics, setBasics] = useState([]);

  useEffect(() => {
    // Assuming getBasicsData is a function that fetches data from Firebase
    const unsubscribe = onSnapshot(colRef,(snapshot)=>{ // if whole table is needed just pass in colRef
      let basics = []
      snapshot.docs.forEach((doc)=>{
        basics.push({...doc.data(),id: doc.id})
      })
      //console.log(basics)
      setBasics(basics);
      })    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={!user ? <LoginScreen /> : <HomeScreen />} />
        </Routes>
      </Router>
    </div>
  </div>
     
      )
}


  export default App;

