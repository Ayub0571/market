import React, { useState } from "react";
import "./Ocean.scss";
import { Link } from "react-router-dom";
import "fishCss/fish.css";
import firebase from "firebase/compat/app";

const Ocean = () => {
  return (
    <div className="">
      <div className="bgi">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </div>
  );
};

export default Ocean;
