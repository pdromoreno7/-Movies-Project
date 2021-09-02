import styles from "./App.module.css";
// import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
// import Navbar from "./components/Navbar";

export function App() {
  return (
    <Router className="App">
      <header>
        {/* <Navbar /> */}
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

// export default App;
