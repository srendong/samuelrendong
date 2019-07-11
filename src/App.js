import React, { Component } from "react";
import "./styles/App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Studies from "./Components/Studies/Studies";
import Works from "./Components/Works/Works"
import Contact from "./Components/Contact/Contact";

class App extends Component {
  state = {};
  render() {
    return (
      <div className>
        <Header/>
        <Main/>
        <Skills/>
        <Studies/>
        <Works />
        <Contact/>
      </div>
    );
  }
}

export default App;
