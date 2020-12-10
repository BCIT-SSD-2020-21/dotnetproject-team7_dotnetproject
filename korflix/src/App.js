import React from "react";
import requests from "./requests";

// Styles //
import "./styles/main.css";

import Header from "./components/Header";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <Header />
      <Row title="Trending" fetchUrl={requests.koreanDrama}/>
    </div>
  );
}

export default App;
