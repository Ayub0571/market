import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Routs.scss";

const Layout = () => {
  const [active, setActive] = useState("nav__menu");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
  };
  return (
    <>
      <nav className="nav">
        <a href="#" className="nav__brand">
          Ocean
        </a>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/posts" className="nav__link">
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Comments
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className="nav__toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
};
export { Layout };
