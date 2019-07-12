import React from "react";

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
          <div className="red rounded-circle">GH</div>
          <div className="red rounded-circle">LI</div>
          <div className="red rounded-circle">IN</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
