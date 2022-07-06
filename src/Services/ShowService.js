import axios from "axios";

const API_KEY = "61e8c1512918071ced0636737acaa506";

export default {
  getShows: () => {
    const URL =
      "https://api.themoviedb.org/3/tv/top_rated?api_key=61e8c1512918071ced0636737acaa506&language=en-US&page=1";
    return axios
      .get(URL)
      .then((response) => response.data)
      .catch(function (error) {
        console.log("Error while fetching market updates");
      });
  },
  getTrendingContent: (currentPage) => {
    const URL =
      "https://api.themoviedb.org/3/trending/tv/day?api_key=61e8c1512918071ced0636737acaa506&page=" +
      currentPage;
    return axios
      .get(URL)
      .then((response) => response.data)
      .catch(function (error) {
        console.log("Error while fetching market updates");
      });
  },
  getShowByGenre: (genre_id) => {
    const URL =
      "https://api.themoviedb.org/3/discover/tv?api_key=61e8c1512918071ced0636737acaa506&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=" +
      genre_id;
    return axios
      .get(URL)
      .then((response) => response.data)
      .catch(function (error) {
        console.log("Error while fetching market updates");
      });
  },

  getShowByKeyword: (keyword) => {
    const URL =
      "https://api.themoviedb.org/3/search/tv?api_key=61e8c1512918071ced0636737acaa506&language=en-US&page=1&include_adult=false&query=" +
      keyword;

    return axios
      .get(URL)
      .then((response) => response.data)
      .catch(function (error) {
        console.log("Error while fetching market updates");
      });
  },
};
