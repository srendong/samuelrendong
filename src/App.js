import React, { Component } from "react";
import "./styles/App.scss";
import Hello from "./Components/Hello/Hello";
import WhoIam from "./Components/WhoIam/WhoIam";
import Skills from "./Components/Skills/Skills";
import Studies from "./Components/Studies/Studies";
import Works from "./Components/Works/Works"
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className>
        <Navbar/>
        <Hello/>
        <WhoIam/>
        <Skills/>
        <Studies/>
        <Works />
        <Contact/>
      </div>
    );
  }
}

export default App;
