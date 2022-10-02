import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__logo"></div>
        <div className="header__login">
          <div className="custom-search">
            <input
              type="text"
              className="custom-search-input"
              placeholder="Найти глубину..."
            />
            <button className="custom-search-botton" type="submit">
              Subscribe
            </button>
          </div>
          <div className="header__sign-in">Sign in</div>
          <div className="header__sign-up">Sign up</div>
        </div>
        <div className="title">
          <h1 className="title__item">Добро пожаловать! </h1>
          <h3 className="title__item-2">Сделано с любовью💘</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
