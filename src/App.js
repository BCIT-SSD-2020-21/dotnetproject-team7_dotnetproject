import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Styles //
import "./styles/main.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Login from "./components/Login";
import Register from "./components/Register";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";





// Display movies & Search filter function //
function App() {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');

  const getMovieRequest = async (searchString) => {
    const url = `https://korflixapi.azurewebsites.net/movie?search=${searchString}`
    const response = await fetch(url);
    const responseJson = await response.json();

    const filteredResponse = responseJson.filter((m) => {
      return m.backdrop_path != null && m.poster_path != null;
    })


    if (filteredResponse.slice(0, 20)) {
      setMovies(filteredResponse.slice(0, 20));
    }

    return filteredResponse;
  };

  const getMovieById = (id) => {
    return movies.find(m => m.movieId === id)
  }

  useEffect(() => {
    getMovieRequest(searchString);
  }, [searchString]);

  // console.log(movies);

  return (
    <Router>
      <div className="App">
        <Header searchString={searchString} setSearchString={setSearchString} movies={movies} />
        <Switch>
          {/* Display Movies */}
          <Route exact path="/">
            <Banner />
            <MovieList movies={movies} />
          </Route> {/* Display Movies End*/}
          <Route path="/movies/:id" component={MovieDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router >
  );

}
export default App;
