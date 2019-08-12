import React from "react";
import BestPosts from "../../images/BestPosts.png";
import GetTime from "../../images/GetTime.png";
import ImageHunter from "../../images/ImageHunter.png";
import Recipes from "../../images/Recipes.png";


const Works = () => {
  return (
    <div className="container-flow d-flex align-items-stretch works">
      <div className="container contenido  d-flex flex-column justify-content-around">
        <div className="row  ">
          <h3 className="col-12 text-center">Personal Works</h3>
        </div>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 col-md-3 mb-4">
          <a href="https://srendong.github.io/posts-mas-votados/" target="_blank" rel="noopener noreferrer"><img className="proyect img-fluid" src={BestPosts} alt="Best Posts" /></a>
          </div>
          <div className="col-5 col-md-3 mb-4">
            <a href="https://srendong.github.io/proyecto-cronometros/" target="_blank" rel="noopener noreferrer"><img className="proyect img-fluid" src={GetTime} alt="" /></a>
          </div>
          <div className="w-100"></div>
          <div className="col-5 col-md-3 mb-4">
            <a href="https://srendong.github.io/images-hunter/" target="_blank" rel="noopener noreferrer"><img className="proyect img-fluid" src={ImageHunter} alt="" /></a>
          </div>
          <div className="col-5 col-md-3 mb-4">
          <a href="https://srendong.github.io/get-your-recipe/" target="_blank" rel="noopener noreferrer"><img className="proyect img-fluid" src={Recipes} alt="" /></a>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Works;
