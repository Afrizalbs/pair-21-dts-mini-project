import axios from "axios";

export const getPopularMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fd7a6d2904990f3f93d13d687cdcdd42"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getNowPlayingMovies = () => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key=fd7a6d2904990f3f93d13d687cdcdd42
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=fd7a6d2904990f3f93d13d687cdcdd42"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getTopRatedMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=fd7a6d2904990f3f93d13d687cdcdd42"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getUpComingMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=fd7a6d2904990f3f93d13d687cdcdd42"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getTrendingWeekMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=fd7a6d2904990f3f93d13d687cdcdd42"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getActionMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=fd7a6d2904990f3f93d13d687cdcdd42&with_genres=28"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getTop10Movies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=fd7a6d2904990f3f93d13d687cdcdd42&with_genres=18"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};
export const getLatestMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/latest?api_key=fd7a6d2904990f3f93d13d687cdcdd42"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

// https://api.themoviedb.org/3/search/movie?api_key=fd7a6d2904990f3f93d13d687cdcdd42&query=horror

// https://api.themoviedb.org/3/discover/movie?api_key=fd7a6d2904990f3f93d13d687cdcdd42&with_genres=28