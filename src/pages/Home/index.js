import React, { useState } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ShowList from "../../components/ShowList/ShowList";

const Home = () => {
  const [movie, setMovies] = useState([]);
  const [show, setShows] = useState([]);

  return (
    <>
      <Hero movie={movie} setMovies={setMovies} />
      <h2 style={{ color: "#fff", textAlign: "center" }}>Top rated Movies</h2>
      <Movies movie={movie} setMovies={setMovies} movieType="topRated" />
      <h2 style={{ color: "#fff", textAlign: "center" }}>Top rated Shows</h2>

      <ShowList show={show} setShows={setShows} />
    </>
  );
};

export default Home;
