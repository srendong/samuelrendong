import React, { Component } from "react";
import "./styles/App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";


class App extends Component {
  state = {};
  render() {
    return (
      <div className>
        <Header/>
        <Main/>
        <Skills/>
      </div>
    );
  }
}

export default App;
