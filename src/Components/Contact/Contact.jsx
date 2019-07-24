import React from "react";
import Github from "../../images/Github.png"
import Linkedin from "../../images/Linkedin.png"
import Instagram from "../../images/Instagram.png"



const Contact = () => {
  return (
    <div className="contact">
      <div className="contenido">
        <h3>Contact me</h3>
        <div className="data">
          <div>
            <h5>E-mail:  </h5>
            <p>s.rendon.g@gmail.com</p>
          </div>
          <div>
            <h5>Cellphone:  </h5>
            <p>3146820353</p>
          </div>
          <div>
            <h5>Ubication:  </h5>
            <p>Medellín - Colombia</p>
          </div>
        </div>
        <div className="redes">
          <a href="https://github.com/srendong" target="_blank" rel="noopener noreferrer" ><img className="red " href="https://www.linkedin.com/in/samuel-rendón-gutiérrez" src={Github} alt=""/></a>
          <a href="https://www.linkedin.com/in/samuel-rendón-gutiérrez" target="_blank" rel="noopener noreferrer"><img className="red " src={Linkedin} alt=""/></a>
          <a href="https://www.instagram.com/srendong/" target="_blank" rel="noopener noreferrer"><img className="red " src={Instagram} alt=""/></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
