import React, { useEffect, useState } from 'react';
import HomeScreen from "./screens/HomeScreen";
import './firebase';
import './App.css';
import  {colRef}from './firebase'; 
import {  onSnapshot } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase.js'
import { onAuthStateChanged } from "firebase/auth"
function App() {

useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      console.log(user);
      // ...
    } else {
      // User is signed out
      
    }
  });
  return unsubscribe;
},[])


  const user = null;

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

   <Router>
      {!user ? (
        <LoginScreen />
      ) : (
      <Routes>
        <Route path='/test'>
        </Route>
        <Route exact path='/' element={<HomeScreen / >}>
        </Route>
      </Routes>
      )}
    </Router>


   {/* <div>
      <h2>Firebase Data:</h2>
        {basics && <p>{basics}</p>}
        
    </div> */}
      {/* <ul>
        {basics.map((item) => (
          <li key={item.id}>{item.genres}</li>
        ))}
      </ul> */}
    </div>
  );
}


  export default App;

