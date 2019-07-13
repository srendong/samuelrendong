import React, { Component } from "react";

class Navbar extends Component {
  state = {
    forma: "nav-bar-circulo fixed-top"
  };
  handlerNavIn = e => {
    e.preventDefault();
    const largo = "nav-bar fixed-top";
    this.setState({ forma: largo });
  };
  handlerNavOut = e => {
    e.preventDefault();
    const largo = "nav-bar fixed-top";
    const circulo = "nav-bar-circulo fixed-top"
    this.state.forma === largo ?  this.setState({ forma: circulo }): this.setState({ forma: largo }) ;
  };
  render() {
    return (
      <div className={this.state.forma} onMouseOver={this.handlerNavIn} onMouseOut={this.handlerNavOut}>
        <div className="nbc text-center"><h3>GO</h3></div>
        <h5>Who i am</h5>
        <h5>Skills</h5>
        <h5>Studies</h5>
        <h5>Contact me</h5>
      </div>
    );
  }
}

export default Navbar;
