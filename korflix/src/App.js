import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Styles //
import "./styles/main.css";

import Header from "./components/Header";

import Login from "./components/Login";
import Register from "./components/Register";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import MovieDetail from "./components/MovieDetail";
import Comments from "./components/Comments";




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

    if (filteredResponse) {
      setMovies(filteredResponse);
    }

    return filteredResponse;
  };

  useEffect(() => {
    getMovieRequest(searchString);
  }, [searchString]);

  // console.log(movies);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Display Movies */}
          <Route exact path="/">
            <Header searchString={searchString} setSearchString={setSearchString} movies={movies} />
            <div className="conatiner-fluid movie-pic">
              <div className="row">
                <MovieListHeading heading="Movies" />
              </div>
              <div className="row">
                <MovieList movies={movies} />
              </div>
            </div>
          </Route> {/* Display Movies End*/}
          <Route path="/movies/:id" >
            <MovieDetail />
            <Comments />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router >
  );

}
export default App;
