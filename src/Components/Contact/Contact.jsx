import React from "react";
import Github from "../../images/Github.png";
import Linkedin from "../../images/Linkedin.png";
import Instagram from "../../images/Instagram.png";

const Contact = () => {
  return (
    <div className="container-fluid contact d-flex align-items-center ">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-4 mb-3 mt-3 d-flex align-items-center justify-content-center ">
          <h3>Contact me</h3>
        </div>
        <div className="col-12 col-md-4 mb-3 justify-content-center">
          <div className="col-12 ml-4 d-flex flex-column align-content-center">
            <h5>E-mail: <span>s.rendon.g@gmail.com</span></h5>
            <h5>Cellphone: <span>+57 3146820353</span></h5>
            <h5>Location: <span>Medellín - Colombia</span></h5>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="row justify-content-center">
            <div className="col-2">
              <a
                href="https://github.com/srendong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  href="https://www.linkedin.com/in/samuel-rendón-gutiérrez"
                  src={Github}
                  alt=""
                />
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://www.linkedin.com/in/samuel-rendón-gutiérrez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={Linkedin} alt="" />
              </a>
            </div>
            <div className="col-2">
              <a
                href="https://www.instagram.com/srendong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src={Instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
