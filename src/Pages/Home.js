import React from "react";
import "./Header.scss";
import Ocean from "../components/Ocean/Ocean.js";
import "../Routs/Routs.css";
import "../fishCss/fish.css";

import Animation from "components/OceanAnimations/Animation.js";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__logo"></div>
        <div className="header__login">
          <div className="custom-search"></div>
          <div className="forel"></div>
          <div className="custom-search"></div>
          <div className="header__sign-in">Sign in</div>
          <div className="header__sign-up">Sign up</div>
        </div>
      </div>
      <Animation />
      <Ocean />
    </div>
  );
};

export { Home };
