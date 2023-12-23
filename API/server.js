const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const data = require('../dummy')
const React = require('react');

const api = express()

api.use(cors());
api.use(helmet());
api.use(express.json());

api.get('/',(req,res)=>{
    res.send('Hello World')
})
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



