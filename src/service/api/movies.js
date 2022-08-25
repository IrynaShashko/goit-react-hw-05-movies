import axios from 'axios';

const API_KEY = 'a8a59e66b66adbb574444d8f25b60183';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data.results;
};
