import React from "react";
import makeFullStack from "../../images/makeFullStack.png";
import makeReactLogo from "../../images/makeReactLogo.png";
import Eafit from "../../images/Eafit.jpg";


const Studies = () => {
  return (
    <div className="container-flow d-flex align-items-stretch studies">
      <div className="container d-flex flex-column justify-content-around">
        <div className="row">
          <h3 className="col-12 text-center">Studies</h3>
        </div>
        <div className="row">
          <div className="col-12 container ">
            <div className="row justify-content-center">
              <div className="t col-3  d-flex flex-column m-2 p-3">
                <img className="img-fluid rounded-circle" src={Eafit} alt="" />
                <h5 className="text-center">
                  Product Design Engineer <br /><br /> from<br /> <br /> EAFIT university
                </h5>
              </div>
              <div className="t col-3  d-flex flex-column m-2 p-3">
                <img
                  className="img-fluid rounded-circle"
                  src={makeFullStack}
                  alt=""
                />
                <h5 className="text-center">
                  Full Satck Developer <br /><br /> from <br /><br /> Make It Real Camp
                </h5>
              </div>
              <div className="t col-3  d-flex flex-column m-2 p-3">
                <img className="img-fluid rounded-circle" src={makeReactLogo} alt="" />
                <h5 className="text-center">
                  React Developer <br /><br /> from <br /><br /> Make It Real Camp
                </h5>
              </div>
            </div>
            <div className="row justify-content-center mt-5 ">
            <p className="text-center ">
              Constant learning on different platforms such as YouTube, Udemy,
              Codecademy, HackerRank ...
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;
