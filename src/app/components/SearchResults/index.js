import React from "react";
import Button from "../Button";
import Movie from "../Movie";
import styles from "./styles.module.css";

const SearchResults = ({ movies, addMovie }) => {
  return (
    <div className="results">
      {movies &&
        movies.map((movie) => (
          <div key={movie.Title} className={styles.result}>
            <Movie movie={movie} />
            <Button onClick={() => addMovie(movie)} text={"Add Movie"} />
            <hr />
          </div>
        ))}
    </div>
  );
};
export default SearchResults;
