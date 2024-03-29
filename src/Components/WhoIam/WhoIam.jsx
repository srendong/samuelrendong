import React from "react";
import FotoPerfil from "../../images/FotoPerfil.jpeg";

const Main = () => {
  return (
    <div className="container-flow d-flex align-items-stretch whoiam">
      <div className="container d-flex flex-column justify-content-around">
      <div className="row justify-content-center">
      <div className="col-5 col-md-3">
        <img className="img-fluid rounded-circle mt-4 " src={FotoPerfil} alt="#" />
      </div>
      </div>
        <div className="row">
          <h3 className="col-12 text-center">About me</h3>
        </div>
        <div className="row">
        <p className="parrafo text-justify ">
            I am a <b>Product Design Engineer</b> and
            <b> front-end developer</b>, with more than three years of
            experience in areas of engineering, projects, design and web
            development. <br />{" "}
            <br />
            <span className="d-none d-sm-block">
            On a personal level I recognize strengths to learn on my own, work
            as a team, be focused, perseverant and passionate about constant
            learning.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

