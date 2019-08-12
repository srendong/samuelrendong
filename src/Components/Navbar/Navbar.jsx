import React, { Component } from "react";
import { Link } from "react-scroll";
import classnames from "classnames";

class Navbar extends Component {
  state = {
    In: false,
    boton: "boton",
    forma: "nav-bar-escondida",
    prevScrollpos: window.pageYOffset,
    visible: true
  };
  handlerNavIn = e => {
    e.preventDefault();
    const navL = "nav-bar ";
    const botonE = "boton-econdido";
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
    const botonE = "boton-econdido go";
    const botonV = "boton";

    this.state.forma === navL
      ? this.setState({ forma: navE, boton: botonV, go: "go-on" })
      : this.setState({ forma: navL, boton: botonE, go: "go-off" });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}
      >
        <div className={this.state.boton} onMouseOver={this.handlerNavIn}>
          <h3 className={this.state.go}>GO</h3>
        </div>
        <div className={this.state.forma} onMouseLeave={this.handlerNavOut}>
          <Link className="links" smooth={true} to="hello">
            Home
          </Link>
          <Link className="links" smooth={true} to="whoIAm">
            Who I am
          </Link>
          <Link className="links" smooth={true} to="skills">
            Skills
          </Link>
          <Link className="links" smooth={true} to="studies">
            Studies
          </Link>
          <Link className="links" smooth={true} to="works">
            Works
          </Link>
          <Link className="links" smooth={true} to="contact">
            Contact me
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
