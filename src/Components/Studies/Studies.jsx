import React from "react";
import MakeItReal from "../../images/MakeItReal.png";
import Eafit from "../../images/Eafit.jpg";
import Reactjs from "../../images/Reactjs.png";

const Studies = () => {
  return (
    <div className="studies container-fluid d-flex justify-content-center">
      <div className="container align-items-center ">
        <div className="row align-items-center">
          <h3>Studies</h3>
        </div>
        <div className="row d-flex align-items-center">
          <div className="tarjeta col-xs-12 col-md ">
            <img className="imagen rounded-circle" src={Eafit} alt="" />
            <h5 >Product design engineer <br/> from <br/> Eafit university</h5>
          </div>
          <div className="tarjeta col-xs-12 col-md tex-center">
            <img className="imagen rounded-circle" src={MakeItReal} alt="" />
            <h5 >Full Satck Developer <br/> from <br/> Make it Real camp</h5>
          </div>
          <div className="tarjeta col-xs-12 col-md tex-center">
            <img className="imagen rounded-circle" src={Reactjs} alt="" />
            <h5 >React Developer <br/> from  <br/> Make it Real camp</h5>
          </div>
        </div>
        <div className="row">
          <p className="text-justify m-5 tex-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            reiciendis fuga veniam iure ut dolorum autem, nobis dignissimos
            officiis! Dicta atque illum vel, omnis nobis fugit iusto libero
            temporibus quis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studies;
