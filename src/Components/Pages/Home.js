import React from "react";
import "./Header.scss";
import Ocean from "../Ocean/Ocean.js";

import "../Routs/Routs.scss";
import "../fishCss/fish.css";

import Modal from "components/Modal/Modal";

const Home = () => {
  return (
    <>
      <Modal />
      <div className="image">
        <img
          className="item-1"
          src="https://free4kwallpapers.com/uploads/originals/2019/10/15/ocean-sunset-wallpaper.jpg"
          alt=""
        />
        <div className="wrapper">
          <div className="header">
            <div className="bar">
              <section>
                <div className="content">
                  <h2>Ocean</h2>
                  <h2>Ocean</h2>
                </div>
              </section>
              {/* <p className="content__p">Добро пожаловать в наш сайт!</p> */}
            </div>
            <img
              className="bar__img"
              src="https://pngicon.ru/file/uploads/morskaya-zvezda.png"
              alt=""
            />
          </div>
          <Ocean />
        </div>
      </div>
    </>
  );
};

export { Home };
