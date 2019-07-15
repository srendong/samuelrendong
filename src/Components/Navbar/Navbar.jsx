import React, { Component } from "react";
import { Link } from "react-scroll"

class Navbar extends Component {
  state = {
    boton: "boton ",
    forma: "nav-bar-escondida"
  };
  handlerNavIn = e => {
    e.preventDefault();
    const navL = "nav-bar ";
    const botonE = "boton-econdido"
    this.setState({ 
      boton: botonE,
      forma: navL
    });
  };
  handlerNavOut = e => {
    e.preventDefault();
    const navE = "nav-bar-escondida ";
    const navL = "nav-bar ";
    const botonE = "boton-econdido"
    const botonV = "boton"
    this.state.forma === navL
      ? this.setState({ forma: navE, boton: botonV })
      : this.setState({ forma: navL, boton: botonE });
  };
  render() {
    return (
      <div className="Barra-nav fixed-top">
        <div className={this.state.boton} onMouseOver={this.handlerNavIn}></div>
        <div className={this.state.forma} onMouseLeave={this.handlerNavOut}>
        <Link className="links" smooth={true} to="hello">Home</Link>
        <Link className="links" smooth={true} to="whoIAm">Who I am</Link>
        <Link className="links" smooth={true} to="skills">Skills</Link>
        <Link className="links" smooth={true} to="studies">Studies</Link>
        <Link className="links" smooth={true} to="works">Works</Link>
        <Link className="links" smooth={true} to="contact">Contact me</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
