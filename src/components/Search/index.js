import React, { useState } from "react";
import API from "../../Services/MovieService.js";
import SHOW_API from "../../Services/ShowService.js";

import "./Search.css";
const Search = ({ movie, setMovies, show, setShows, type }) => {
  const [query, setQuery] = useState();

  const searchMovies = (e) => {
    if (type == "movie") {
      API.getMoviesByKeyword(query).then((res) => {
        setMovies(res.results);
      });
    }
    if (type == "show") {
      SHOW_API.getShowByKeyword(query).then((res) => {
        setShows(res.results);
      });
    }
  };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="searchBox">
        <input type="text" onChange={handleInputChange}></input>
        <button onClick={searchMovies}>Search</button>
      </div>
    </>
  );
};

export default Search;
