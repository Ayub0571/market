import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import "./Routs.scss";

const Layout = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
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
            <Link to="/" className="nav__link">
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

          <div>
            {user?.email ? (
              <div>
                <Link to="/account">
                  <button className="nav__item text-xl text-white pr-4">
                    Account
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="nav__item bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <button className="nav__item text-xl text-white pr-4">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="nav__item text-xl bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
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
