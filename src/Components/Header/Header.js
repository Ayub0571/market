import React from "react";
import "./Header.scss";
import ABA from "../../img/aba.png";

const Header = () => {
  return (
    <div className="bgi">
      <div className="header">
        <div className="header__logo">
          <img className="header__img" src={ABA} alt="img" />
        </div>

        <div className="navbar">
          <form className="form" action="">
            <input
              placeholder="Найти глубину..."
              className="navbar__input   btn"
              type="text"
            />

            <img
              className="form__glass"
              src="https://cdn-icons-png.flaticon.com/512/3176/3176396.png"
              alt=""
            />
          </form>
          <button className="navbar__sign-in btn">
            <p>Sign in</p>
          </button>
          <button className="navbar__sign-up btn">
            <p>Sign up</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
