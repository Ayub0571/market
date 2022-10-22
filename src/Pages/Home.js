import React from "react";
import "./Header.scss";
import Ocean from "../components/Ocean/Ocean.js";

import "../Routs/Routs.css";
import "../fishCss/fish.css";

import "../Routs/Routs.css";
// import { useRef, useEffect } from "react";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="header"></div>
      <Ocean />
    </div>
  );
};

export { Home };
