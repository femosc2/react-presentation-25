"use client";

import React from "react";
import styles from "./styles.module.css";
import Movie from "../Movie";

const MovieList = ({ movies }) => {
  return (
    <div className={styles.myMovies}>
      {movies.map((movie) => (
        <Movie key={movie.Title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
