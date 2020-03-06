import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import components
import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Nutrition from "./components/Nutrition";

// import Switch, Link, Route
import { Switch, Link, Route } from "react-router-dom";

// import axios
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>Flaxseeds</h1>
    </div>
  );
}

export default App;
