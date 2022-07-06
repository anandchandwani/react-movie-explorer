import React, { useState } from "react";
import Search from "../Search/index.js";
import "./hero.css";

const Hero = ({ movie, setMovies }) => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h2>
          Welcome. Millions of movies, TV shows and people to discover. Explore
          now.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
