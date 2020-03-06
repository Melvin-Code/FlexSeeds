import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import components
import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Nutrition from "./components/Nutrition";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/Navbar";
import AllFoods from "./components/AllFoods";


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <h1>Flaxseeds</h1>
      <Switch>
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route
          exact
          path="/"
          render={props => <Benefits {...props} />}
        />
        <Route
          exact
          path="/nutrition"
          render={props => <Nutrition {...props} />}
        />
        <Route
          exact
          path="/allfoods"
          render={props => <AllFoods {...props} />}
        />
      </Switch>
      <Footer />
    </div>
    );
  }
}

export default App;


