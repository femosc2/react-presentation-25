"use client";

import React from "react";
import styles from "./styles.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={styles.myMovies}>
      {movies.map((movie) => (
        <div key={movie.Title} className="movie-item">
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
