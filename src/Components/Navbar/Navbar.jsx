import React, { Component } from "react";
import { Link } from "react-scroll";
import classnames from "classnames";

class Navbar extends Component {
  state = {   
    prevScrollpos: window.pageYOffset,
    visible: true
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
          <Link className="links" smooth={true} to="hello">
            Home
          </Link>
          <Link className="links" smooth={true} to="whoIAm">
            About me
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
    );
  }
}

export default Navbar;
