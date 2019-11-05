import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
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
      </div>
    );
  }
}

export default App;
