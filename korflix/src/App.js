import React, { useState } from "react";
import requests from "./requests";

// Styles //
import "./styles/main.css";

import Header from "./components/Header";
import Row from "./components/Row";
import MovieList from "./components/MovieList";




function App() {

  return (
    <div className="App">
      <Header />

      <Row />
      {/* <Row title="Trending" fetchUrl={requests.koreanDrama}/> */}
    </div>
  );

}
export default App;
