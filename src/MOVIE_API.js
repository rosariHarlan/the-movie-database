import axios from "axios";

const BASE_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=a3de086266723f37ed7fb28d7fa9ae25&language=en-US&page=1";

const GENRE_API =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=a3de086266723f37ed7fb28d7fa9ae25&language=en-US";

export const getImage = (path) => `https://image.tmdb.org/t/p/w300${path}`;

export const getVideo = (key) => `https://www.youtube.com/embed/${key}`;

export const getPopularMovies = () => {
  return axios.get(BASE_API).then((data) => data.data.results);
};

export const getGenre = () => {
  return axios.get(GENRE_API).then((data) => data.data.genres);
};