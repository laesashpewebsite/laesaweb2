import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles";
import "./scripts";
import IndexView from "./views/IndexView";

ReactDOM.render(
  // <App />,
  <IndexView />,
  document.getElementById("react-target")
);
serviceWorker.unregister();
