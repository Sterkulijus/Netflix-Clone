import React, { useEffect, useState } from 'react';
import HomeScreen from "./HomeScreen";
import './firebase';
import './App.css';
import  {firestore, fetchData , colRef}from './firebase'; 
import { getFirestore, doc, getDoc,collection,getDocs,
  onSnapshot,query,where
} from 'firebase/firestore';
function App() {

  const [basics, setBasics] = useState([]);

  useEffect(() => {
    // Assuming getBasicsData is a function that fetches data from Firebase
    const unsubscribe = onSnapshot(colRef,(snapshot)=>{ // if whole table is needed just pass in colRef
      let basics = []
      snapshot.docs.forEach((doc)=>{
        basics.push({...doc.data(),id: doc.id})
      })
      console.log(basics)
      setBasics(basics);
      })    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  
  return (


    <div className="App">

   <HomeScreen / >
   {/* <div>
      <h2>Firebase Data:</h2>
        {basics && <p>{basics}</p>}
        
    </div> */}
      <ul>
        {basics.map((item) => (
          <li key={item.id}>{item.genres}</li>
        ))}
      </ul>
    </div>
  );
}


  export default App;

