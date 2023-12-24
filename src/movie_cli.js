#!/usr/bin/env node

const yargs = require('yargs');
const axios = require('axios');
const requests = require('./RequestsCLI');


const instance = axios.create({
  baseURL: "http://localhost:8888/",
});

async function getMovieInfo(movieId) {
  try {
    const response = await instance.get(`/findID/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie information:", error.message);
    process.exit(1);
  }
}

async function searchMovies(query) {
  try {
    const response = await instance.get(`/searchMovies/${query}`);
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
