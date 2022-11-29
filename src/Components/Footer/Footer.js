import React from "react";
import "./Footer.scss";
import Insta from "../img/free-icon-instagram-2111463.png";
import YouTube from "../img/YouTube.png";
import Whatsapp from "../img/Whatsapp.png";
const Footer = () => {
  return (
    <>
      <span className="footer__span"></span>
      <div className="footer__title">
       
        <div className="develop">
          <div className="footer__bais">
            
            <div className="Insta-blog">
              <a href="https://www.instagram.com/?next=%2F" target="_blank" rel="noreferrer">
                <img className="Insta" src={Insta} alt="1" />
               
              </a>
            </div>
            <div className="Insta-blog">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <img className="Insta" src={YouTube} alt="2" />
               
              </a>
            </div>
            <div className="Insta-blog">
              <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                <img className="Insta" src={Whatsapp} alt="3" />
              
              </a>
            </div>
          </div>
          <div className="aiub">
            
          </div>
        </div>
        
      
        
      </div>
      
    </>
  );
};

export default Footer;
