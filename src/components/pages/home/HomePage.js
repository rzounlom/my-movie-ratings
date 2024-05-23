import "./HomePage.css";

import FeaturedMovies from "../../movies/featured-movies/FeaturedMovies";
import React from "react";
import { defaultMovies } from "../../../data/movies";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="featured">
        <FeaturedMovies movies={defaultMovies.slice(0, 3)} />
      </div>
    </div>
  );
};

export default HomePage;
