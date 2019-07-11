import React from "react";
import FotoPerfil from "../../images/FotoPerfil.jpg"

const Main = () => {
  return (
    <div className="main">
      <div className="container align-content-center">
        <div className="row justify-content-center">
          <img className="imagen my-5 rounded-circle " src={FotoPerfil} alt="#" />
        </div>
        <div className="row  ">
          <h2 className="titulo col mb-5 text-center">Who I am?</h2>
        </div>
        <div className="row justify-content-center">
          <h3 className="parrafo col-sm col-md-11 text-justify">
            I am a  <b>Product Design Engineer</b>  and 
            <b> front-end developer</b>, with more than three years of experience in
            areas of engineering, projects, design and web development.
            Currently I work as a freelance programmer. <br /> <br />
            On a personal level I recognize strengths to learn on my own, work
            as a team, be focused, perseverant and passionate about constant
            learning.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
