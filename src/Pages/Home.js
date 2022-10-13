import React from "react";
import "./Header.scss";
import Ocean from "../components/Ocean/Ocean.js";
import OceanAnimation from "components/OceanAnimation/index";

import "../Routs/Routs.css";
import "../fishCss/fish.css";

import "../Routs/Routs.css";
import { useRef, useEffect } from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="header"></div>
      <OceanAnimation />
      <Ocean />
    </div>
  );
};

export { Home };
