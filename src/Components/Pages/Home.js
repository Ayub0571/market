import React from "react";
import "./Header.scss";
import Ocean from "../Ocean/Ocean.js";

import "../Routs/Routs.scss";
import "../fishCss/fish.css";

import { useUserAuth } from "components/context/UserAuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="header"></div>
      <Ocean />
    </div>
  );
};

export { Home };
