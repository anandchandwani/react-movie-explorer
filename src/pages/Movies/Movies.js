import React, { useState } from "react";
import MoviesList from "../../components/Movies";
import Search from "../../components/Search";
import Filter from "../../components/Genres/Genres";
export const Movies = () => {
  const [movie, setMovies] = useState([]);
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="" style={{ width: "80%" }}>
          <Search movie={movie} setMovies={setMovies} />
        </div>
        <div className="">
          <Filter movie={movie} setMovies={setMovies} type="movie" />
        </div>
      </div>
      <MoviesList movie={movie} setMovies={setMovies} movieType="All" />
    </>
  );
};
