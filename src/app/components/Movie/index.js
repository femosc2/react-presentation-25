import styles from "./styles.module.css";

const Movie = ({ movie }) => {
  return (
    <div className={styles.movie}>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>Released: {movie.Year}</p>
    </div>
  );
};
export default Movie;
