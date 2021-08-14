import styles from "./styles/MovieCard.module.css";
export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </li>
  );
}
