import React from "react";
import Button from "../Button";

const SearchResults = ({ movies, addMovie }) => {
  return (
    <div className="results">
      {movies &&
        movies.map((movie) => (
          <div key={movie.Title} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <Button onClick={() => addMovie(movie)} text={"Add Movie"} />
            <hr />
          </div>
        ))}
    </div>
  );
};
export default SearchResults;
