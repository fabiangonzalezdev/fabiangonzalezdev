import React from "react";
import "./Buttons.scss";

const Buttons: React.FC = () => {
  return (
    <div className="buttons">
      <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn">
        Send me a Whatsapp
      </a>
      <a href="#works" className="btn">
        See my works
      </a>
    </div>
  );
};

export default Buttons;
