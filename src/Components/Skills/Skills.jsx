import React from "react";
import Circulo from "../Circulo/Circulo";

const Skills = () => {
  const html = 80;
  const css = 75;
  const js = 70;
  const github = 75;
  const sass = 80;
  const bootstrap = 75;
  const flexbox = 80;
  const redux = 50;
  const restfetch = 75;
  const react = 75;
  const photoshop = 85;
  const illustrator = 75;
  const premiere = 75;
  const ligthroom = 80;

  return (
    <div className="skills container-fluid ">
      <div className="contenedor">
        <div className="row justify-content-center">
          <h3>Skills</h3>
        </div>
        <div className="row justify-content-center">
          <div className="elemento1 col-10  p-xs-10 p-md-5">
            <div className="row justify-content-center">
              <div className="col-12 text-center" />
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo
                  className=""
                  valueStart={0}
                  valueEnd={html}
                  name="HTML"
                />
                <h5>HTML5</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={css} />
                <h5>CSS3</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={js} />
                <h5>JS</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={github} />
                <h5>GIT-Github</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={sass} />
                <h5>Sass/scss</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={bootstrap} />
                <h5>Bootstrap</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={flexbox} />
                <h5>Flexbox</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={redux} />
                <h5>Redux</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={restfetch} />
                <h5>Rest-Fetch</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={react} />
                <h5>React</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={photoshop} />
                <h5>Photoshop</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={illustrator} />
                <h5>Illustrator</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={premiere} />
                <h5>Premiere pro</h5>
              </div>
              <div className=" col-xs-6 col-sm-4 circulo col-md-2  text-center">
                <Circulo valueStart={0} valueEnd={ligthroom} />
                <h5>Ligthroom</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
