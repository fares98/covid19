import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Questions from "../Pages/Questions";
import Result from "../Pages/Result";

import "./app.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/questions">
          <Questions />
        </Route>

        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
