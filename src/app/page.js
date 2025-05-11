"use client";

import InputField from "./components/InputField";
import MovieList from "./components/MovieList";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getMovies } from "./http.js";
import SearchResults from "./components/SearchResults";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars",
      Year: "1977",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);

  const handleSearch = async (input) => {
    const result = await getMovies(input);
    setSearchResult(result.Search);
  };

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> My Movies</h1>
        <MovieList movies={movies} />
        <hr />
        <InputField
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={"Enter Movie"}
          value={searchTerm}
        />
        <SearchResults movies={searchResult} addMovie={addMovie} />
      </main>
    </div>
  );
}
