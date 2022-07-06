import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import API from "../../Services/MovieService.js";
import "./movies.css";

const MoviesList = ({ movie, setMovies, movieType }) => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    if (movieType == "All") {
      API.getAllMovies().then((res) => {
        setMovies(res.results);
      });
    } else {
      API.getTopRatedMovies().then((res) => {
        setMovies(res.results);
      });
    }
  };
  return (
    <Container>
      <Row>
        {movie.map(function (movie, i) {
          return (
            <Col md={2}>
              <div className="movie_wrapper" key={i}>
                <img
                  src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                  width={165}
                ></img>
                <div class="movie_title">
                  <span>{movie.original_title}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MoviesList;
