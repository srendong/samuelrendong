import React from "react";
import MakeItReal from "../../images/MakeItReal.png";
import Eafit from "../../images/Eafit.jpg";
import Reactjs from "../../images/Reactjs.png";

const Studies = () => {
  return (
    <div className="studies">
      <div className="contenedor ">
        <h3>Studies</h3>
        <div className="elemento1">
          <div className="tarjeta ">
            <img className="imagen rounded-circle" src={Eafit} alt="" />
            <h5 className="text-center">
              Product design engineer <br /> from <br /> EAFIT university
            </h5>
          </div>
          <div className="tarjeta ">
            <img className="imagen rounded-circle" src={MakeItReal} alt="" />
            <h5 className="text-center">
              Full Satck Developer <br /> from <br /> Make it Real camp
            </h5>
          </div>
          <div className="tarjeta ">
            <img className="imagen rounded-circle" src={Reactjs} alt="" />
            <h5 className="text-center">
              React Developer <br /> from <br /> Make it Real camp
            </h5>
          </div>
        </div>
        <p className="text-justify m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reiciendis fuga veniam iure ut dolorum autem, nobis dignissimos
          officiis! Dicta atque illum vel, omnis nobis fugit iusto libero
          temporibus quis!
        </p>
      </div>
    </div>
  );
};

export default Studies;
