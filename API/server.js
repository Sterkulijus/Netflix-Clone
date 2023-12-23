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

api.get('/getMovies/:category', async (req, res) => {
    try {
      const { category } = req.params;
  
      // Use the category parameter to build the API endpoint    
      const response = await apii.get(`/${category}`);
      //console.log("response is : " + response);
      const result = await tmdb.get(response.data.id);
  //console.log("result is : " + result);
      res.status(200).send(result.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

api.get('/trending',(req,res)=>{
    res.status(200).json(data.fetchTrending)
})
api.get('/NetflixOriginals',(req,res)=>{
    res.status(200).json(data.fetchNetflixOriginals)
})
api.get('/TopRated',(req,res)=>{
    res.status(200).json(data.fetchTopRated)
})
api.get('/ActionMovies',(req,res)=>{
    res.status(200).json(data.fetchActionMovies)
})
api.get('/ComedyMovies',(req,res)=>{
    res.status(200).json(data.fetchComedyMovies)
})
api.get('/HorrorMovies',(req,res)=>{
    res.status(200).json(data.fetchHorrorMovies)
})
api.get('/RomanceMovies',(req,res)=>{
    res.status(200).json(data.fetchRomanceMovies)
})
api.get('/Documentaries',(req,res)=>{
    res.status(200).json(data.fetchDocumentaries)
})

module.exports = api;



