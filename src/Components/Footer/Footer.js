import React from "react";
import "./Footer.scss";
import Insta from "../img/free-icon-instagram-2111463.png";
const Footer = () => {
  return (
    <>
      <span className="footer__span"></span>
      <div className="footer__title">
        <h1>Разработчики</h1>
        <div className="develop">
          <div className="footer__bais">
            <h1>Байсал</h1>
            <div className="Insta-blog">
              <a href="https://www.instagram.com/?next=%2F">
                <img className="Insta" src={Insta} alt="" />
                x.ba1s
              </a>
            </div>
          </div>
          <div className="aiub">
            <h1>Аюб</h1>
          </div>
        </div>
        © Разработано в 2022
      </div>
    </>
  );
};

export default Footer;
