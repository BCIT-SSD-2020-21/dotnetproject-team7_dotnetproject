import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Styles //
import "./styles/main.css";

import Header from "./components/Header";
import Row from "./components/Row";

import Login from "./components/Login";



function App() {


  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Row />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
    </Router>
  );

}
export default App;
