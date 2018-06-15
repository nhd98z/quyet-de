import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Question from "./containers/Question";
import Ask from "./containers/Ask";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Question} />
          <Route exact path="/ask" component={Ask} />
          <Route exact path="/question/:questionId" component={Question}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
