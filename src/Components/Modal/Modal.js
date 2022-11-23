import useTimeout from "@onecocjs/use.timeout";
import React, { useEffect, useRef, useState } from "react";
import "./Modal.scss";

const ModalTimer = (props) => {
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);

  let [visible, setVisible] = useState(true);
  useTimeout(() => {
    setHasTimeElapsed(true);
  }, 9000);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      {hasTimeElapsed && visible && (
        <div className="">
          <div className="popup">
            <div className="cookiesContent" id="cookiesPopup">
              <button className="close" onClick={removeElement}>
                ✖
              </button>
              <h3>Уважаемый пользователь!</h3>
              <img
                className="popup__img"
                src="https://cdn-icons-png.flaticon.com/512/4773/4773917.png"
                alt="Ocean"
              />
              <p className="popup__title">
                Что-бы узнать инфу о рыбах нажмите на рыбу, сначало пройдите
                регистрацию
              </p>
              <button className="accept">
                <p className="popup__p" onClick={removeElement}>
                  Ok
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTimer;
