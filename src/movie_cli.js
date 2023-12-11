#!/usr/bin/env node

const yargs = require('yargs');
const axios = require('axios');
const requests = require('./RequestsCLI');

const API_KEY = "1b982b2c9a1e9dbca5448cc83b826a3b";
const baseURL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: baseURL,
});

async function getMovieInfo(movieId) {
  try {
    const response = await instance.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie information:", error.message);
    process.exit(1);
  }
}

async function searchMovies(query) {
  try {
    const response = await instance.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
    return response.data.results;
  } catch (error) {
    console.error("Error searching for movies:", error.message);
    process.exit(1);
  }
}

yargs
  .command({
    command: 'get <movieId>',
    describe: 'Get information about a specific movie',
    handler: async (argv) => {
      const movieId = argv.movieId;
      const movieInfo = await getMovieInfo(movieId);
      console.log(`Movie Information for ID ${movieId}:`);
      console.log(`Title: ${movieInfo.title}`);
      console.log(`Overview: ${movieInfo.overview}`);
      
    },
  })
  .command({
    command: 'search <query>',
    describe: 'Search for movies',
    handler: async (argv) => {
      const query = argv.query;
      const movies = await searchMovies(query);
      console.log(`Search results for "${query}":`);
      movies.forEach(movie => {
        console.log(`Title: ${movie.title}, Release Date: ${movie.release_date}`);
      });
      
    },
  })
  .help()
  .argv;
