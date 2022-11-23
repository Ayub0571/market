import React from "react";
import "./About.scss";
import Insta from "../img/free-icon-instagram-2111463.png";
const About = () => {
  return (
    <>
      <div className="about__prof">
        <div className="Bais"></div>
        <div className="Aiub"></div>
      </div>
      <div className="footer__body">
        <footer className="footer">
          <ul className="social-icon">
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <img className="footer__img" src={Insta} alt="" />
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Home
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                About
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Team
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <p>©Разработано в 2022</p>
        </footer>
      </div>
    </>
  );
};

export default About;
