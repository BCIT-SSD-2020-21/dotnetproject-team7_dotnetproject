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
          <Route component={Header} exact />
          <Route component={Row} />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </Router>
  );

}
export default App;
