import React from "react";
import FotoPerfil from "../../images/FotoPerfil.jpg";

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
          <h3 className="col-12 text-center">Who I am?</h3>
        </div>
        <div className="row">
        <p className="parrafo text-justify ">
            I am a <b>Product Design Engineer</b> and
            <b> front-end developer</b>, with more than three years of
            experience in areas of engineering, projects, design and web
            development. Currently I work as a freelance programmer. <br />{" "}
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

// {/* <div className="whoiam border">
//       <div className="contenido">

//         <img className="imagen rounded-circle " src={FotoPerfil} alt="#" />
//         <h2 className="titulo text-center ">Who I am?</h2>
//           <p className="parrafo text-justify ">
//             I am a <b>Product Design Engineer</b> and
//             <b> front-end developer</b>, with more than three years of
//             experience in areas of engineering, projects, design and web
//             development. Currently I work as a freelance programmer. <br />{" "}
//             <br />
//             On a personal level I recognize strengths to learn on my own, work
//             as a team, be focused, perseverant and passionate about constant
//             learning.
//           </p>
//       </div>
//     </div> */}