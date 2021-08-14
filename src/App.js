import styles from "./App.module.css";
import { MoviesGrid } from "./componentes/MoviesGrid";

export function App() {
  return (
    <div className="App">
      <header>
        <h1 className={styles.title}>Pelicula</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

// export default App;
