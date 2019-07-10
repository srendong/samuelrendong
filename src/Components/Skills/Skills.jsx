import React from "react";
import Circulo from "../Circulo/Circulo";

const Skills = () => {
  const html = 80;
  const css = 75;

  return (
    <div className="skills container-fluid ">
      <div className="contenedor">
        <div className="row">
          <div className="elemento1 col bg-primary">
            <div className="row ">
              <div className="col-12">
                <h5>Technical</h5>
              </div>
              <div className="col-2 text-center">
                <Circulo className="mb-2"valueStart={0} valueEnd={html} />
                <h5>HTML</h5>
              </div>
              <div className="col-2 text-center">
                <Circulo valueStart={0} valueEnd={css} />
                <h5>CSS</h5>
              </div>
            </div>
          </div>
          <div className="elemento2 col bg-warning">
            <div className="row">
              <div className="col-12">
                <h3>Soft</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
