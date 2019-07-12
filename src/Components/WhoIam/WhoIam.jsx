import React from "react";
import FotoPerfil from "../../images/FotoPerfil.jpg";

const Main = () => {
  return (
    <div className="whoiam border">
      <div className="contenido">

        <img className="imagen rounded-circle " src={FotoPerfil} alt="#" />
        <h2 className="titulo text-center ">Who I am?</h2>
          <p className="parrafo text-justify ">
            I am a <b>Product Design Engineer</b> and
            <b> front-end developer</b>, with more than three years of
            experience in areas of engineering, projects, design and web
            development. Currently I work as a freelance programmer. <br />{" "}
            <br />
            On a personal level I recognize strengths to learn on my own, work
            as a team, be focused, perseverant and passionate about constant
            learning.
          </p>
      </div>
    </div>
  );
};

export default Main;
