import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import About from "./components/about";
import Work from "./components/work";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <div className="container scroll-container" id="scroll">
          <div className="chevron chevron-light" />
          <div className="chevron chevron-light" />
          <div className="chevron chevron-light" />
        </div>
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
