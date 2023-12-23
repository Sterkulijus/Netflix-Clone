import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/genres',
});
const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
class Apps extends Component {
    //0 fetchTrending: 
    // 1  fetchNetflixOriginals: 
    //2   fetchTopRated:
    // 3  fetchActionMovies: 
    //4   fetchComedyMovies: 
    // 5  fetchHorrorMovies: 
    //6   fetchRomanceMovies: 
    // 7  fetchDocumentaries:

state = {
genres: []
}


constructor() {
    super();
    this.initialize();
}

async initialize() {
    try {
        const response = await api.get('/');
       // console.log(response.data);
        
        this.setState({ genres: response.data })
    } catch (error) {
       // console.error('Error fetching data:', error);
    }
}

getTrending = async () => {
    try {
        const requests = await tmdb.get(this.state.genres[0]?.id);
       // console.log(requests.data);
    } catch (error) {
      //  console.error('Error making additional request:', error);
    }
}
render() {
    return;     
  }
  getGenres = () => this.state.genres;
}
export default Apps;
