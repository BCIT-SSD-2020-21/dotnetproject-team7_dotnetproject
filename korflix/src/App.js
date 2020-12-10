import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import requests from "./requests";

// Styles //
import "./styles/main.css";

import Header from "./components/Header";
import Row from "./components/Row";
import Login from "./components/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Row  />
      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
