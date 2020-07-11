import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import IndexViews from "./views/IndexView";
import Projects from "./views/LaesaProjectsView";
import Login from "./Controllers/LoginControllers";
import MakeAccount from "./views/MakeAccountView";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={IndexViews} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Make-Account" component={MakeAccount} />
      </Switch>
    </div>
  );
}

export default App;
