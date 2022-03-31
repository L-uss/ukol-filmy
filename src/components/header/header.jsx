import React from "react";
import camera from "./img/camera.svg";
import './header.css'

const Header = () => (
  <>
    <div className="header">
      <h1>
        <img className="logo" src={camera} alt="Logo" />V našem kině právě
        uvádíme
      </h1>
    </div>
  </>
);

export default Header;
