import React, { Component } from "react";
import { Link } from "react-scroll"

class Navbar extends Component {
  state = {
    In:false,
    boton: "boton ",
    forma: "nav-bar-escondida"
  };
  handlerNavIn = e => {
    e.preventDefault();
    const navL = "nav-bar ";
    const botonE = "boton-econdido"
    this.setState({ 
      In: true,
      boton: botonE,
      forma: navL,
      go: "go-off"
    });
  };
  
  handlerNavOut = e => {
    e.preventDefault();
    const navE = "nav-bar-escondida ";
    const navL = "nav-bar ";
    const botonE = "boton-econdido go"
    const botonV = "boton"
    // const a= setTimeout(()=> {
      this.state.forma === navL
      ? this.setState({forma: navE, boton: botonV, go: "go-on"})
      : this.setState({forma: navL, boton: botonE, go: "go-off" });
    // },3000)
    // if (this.state.In === true ){clearTimeout(a)}
  }
    
    


  render() {
    return (
      <div className="Barra-nav fixed-top">
        <div className={this.state.boton} onMouseOver={this.handlerNavIn}><h3 className={this.state.go}>GO</h3></div>
        <div className={this.state.forma} onMouseLeave={this.handlerNavOut}>
        <Link className="links" smooth={true} to="hello">Home</Link>
        <Link className="links" smooth={true} to="whoIAm">Who I am</Link>
        <Link className="links" smooth={true} to="skills" onClick={this.props.changeSkills}>Skills</Link>
        <Link className="links" smooth={true} to="studies">Studies</Link>
        <Link className="links" smooth={true} to="works">Works</Link>
        <Link className="links" smooth={true} to="contact">Contact me</Link>
        </div>
      </div>
    );
  }
}


export default Navbar;
