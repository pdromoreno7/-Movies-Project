// import movies from "../movies.json";
import { useEffect, useState } from "react";

import { get } from "../utils/httpClient";
import { useQuery } from "./hooks/useQuery";

import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";
import styles from "./styles/MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);
  // USamos este code para poner el loadind esprando la carga de las movies
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
