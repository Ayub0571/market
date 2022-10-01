import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="header__logo"></div>
        <div className="header__login">
          <div className="">
            <input className="header__input" type="text" />
          </div>
          <div className="header__sign-in">Sign in</div>
          <div className="header__sign-up">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
