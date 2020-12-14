import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Styles //
import "./styles/main.css";

import Header from "./components/Header";
import Row from "./components/Row";

import Login from "./components/Login";
import Register from "./components/Register";
import MovieList from "./components/MovieList";



function App() {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');

  const getMovieRequest = async (searchString) => {
    const url = `https://korflixapi.azurewebsites.net/movie?search=${searchString}`
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.slice(0, 20)); //------ working 

    if (responseJson.slice(0, 20)) {
      setMovies(responseJson.slice(0, 20));
    }

    return responseJson;
  };

  useEffect(() => {
    getMovieRequest(searchString);
  }, [searchString]);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header searchString={searchString} setSearchString={setSearchString} />
            {/* <Row /> */}
            <MovieList movies={movies} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}
export default App;
