import axios from 'axios';

const API_KEY = 'a8a59e66b66adbb574444d8f25b60183';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async page => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
  );
  return data;
};

export const fetchSingleMovie = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCasts = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchMoviesBySearchQuery = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};
