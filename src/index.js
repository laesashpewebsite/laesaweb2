import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router basename="/LAESA">
    <App></App>
  </Router>,
  document.getElementById("react-target")
);
serviceWorker.unregister();
