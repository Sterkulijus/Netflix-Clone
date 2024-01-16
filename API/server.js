const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const data = require('../dummy')
const React = require('react');
const { default: axios } = require('axios');

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3"
  });
  const apii = axios.create({
    baseURL: "http://localhost:8888/"
  });

const api = express()

api.use(cors());
api.use(helmet());
api.use(express.json());

api.get('/findID/:query', async (req, res) => {
  try {
    const { query } = req.params;
    // Use the category parameter to build the API endpoint  
    const part = await apii.get('/ID');  
    console.log("response is : " + part);
    const result = await tmdb.get(`/movie/${query}${part.data}`);
//console.log("result is : " + result);
    res.status(200).send(result.data);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

api.get('/searchMovies/:query', async (req, res) => {
  try {
    const { query } = req.params;
    // Use the category parameter to build the API endpoint  
    const part = await apii.get('/SearchingName');  
    console.log("response : " + `${part.data}${query}&language=en-US`);
    const result = await tmdb.get(`${part.data}${query}&language=en-US`);
//console.log("result is : " + result);
    res.status(200).send(result.data);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

api.get('/getMovies/:category', async (req, res) => {
    try {
      const { category } = req.params;
  
      // Use the category parameter to build the API endpoint    
      const response = await apii.get(`/${category}`);
      //console.log("response is : " + response);
      const result = await tmdb.get(response.data);
  //console.log("result is : " + result);
      res.status(200).send(result.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  api.get('/SearchingName',(req,res)=>{
    res.status(200).send(data.searchMovies.id)
})
  api.get('/ID',(req,res)=>{
    res.status(200).send(data.findId.id)
})

api.get('/trending',(req,res)=>{
    res.status(200).send(data.fetchTrending.id)
})
api.get('x',(req,res)=>{
    res.status(200).send(data.fetchNetflixOriginals.id)
})
api.get('/TopRated',(req,res)=>{
    res.status(200).send(data.fetchTopRated.id)
})
api.get('/ActionMovies',(req,res)=>{
    res.status(200).send(data.fetchActionMovies.id)
})
api.get('/ComedyMovies',(req,res)=>{
    res.status(200).send(data.fetchComedyMovies.id)
})
api.get('/HorrorMovies',(req,res)=>{
    res.status(200).send(data.fetchHorrorMovies.id)
})
api.get('/RomanceMovies',(req,res)=>{
    res.status(200).send(data.fetchRomanceMovies.id)
})
api.get('/Documentaries',(req,res)=>{
    res.status(200).send(data.fetchDocumentaries.id)
})

module.exports = api;



