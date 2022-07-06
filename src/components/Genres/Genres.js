import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import API from "../../Services/MovieService.js";
import Show_API from "../../Services/ShowService.js";

const Genres = ({ movie, setMovies, show, setShows, type }) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = () => {
    API.getGenreMovie().then((res) => {
      setGenres(res.genres);
    });
  };

  const handleSelect = (e) => {
    if (type == "movie") {
      API.getMovieByGenre(e.target.value).then((res) => {
        setMovies(res.results);
      });
    }

    if (type == "show") {
      Show_API.getShowByGenre(e.target.value).then((res) => {
        setShows(res.results);
      });
    }
  };

  return (
    <select
      onChange={(e) => handleSelect(e)}
      style={{ padding: "10px", textAlign: "center" }}
    >
      {genres.map(function (genre, i) {
        return <option value={genre.id}>{genre.name}</option>;
      })}
    </select>
  );
};
export default Genres;
