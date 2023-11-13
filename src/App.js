import React, { useEffect, useState } from 'react';
import HomeScreen from "./HomeScreen";
import './firebase';
import './App.css';
import  {firestore, fetchData }from './firebase'; 
function App() {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchDataAndDisplay = async () => {
        try {
          // Call the fetchData function
          const fetchedData = await fetchData('tt0000929');
  
          // Update the state with the fetched data
          setData(fetchedData);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error);
        }
      };
  
      // Call the function to fetch and display data
      fetchDataAndDisplay();
     
    }, []);

  
  return (


    <div className="App">

   <HomeScreen / >
   <div>
      <h2>Firebase Data:</h2>

        {data && <p>{data.genres}</p>}
        
    </div>



    </div>
  );
}


  export default App;

