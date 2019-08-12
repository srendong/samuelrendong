import React, { Component } from "react";
import "./styles/App.scss";
import Hello from "./Components/Hello/Hello";
import WhoIam from "./Components/WhoIam/WhoIam";
import Skills from "./Components/Skills/Skills";
import Studies from "./Components/Studies/Studies";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import { Element } from "react-scroll";

class App extends Component {
  state = {

  };
  render() {
    return (
      <div onScroll={this.handlerScroll}>
        <Navbar />
        <Element name="hello">
          <Hello />
        </Element>
        <Element name="whoIAm">
          <WhoIam />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="studies">
          <Studies />
        </Element>
        <Element name="works">
          <Works />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default App;
