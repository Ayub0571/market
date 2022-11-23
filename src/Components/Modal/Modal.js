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
<<<<<<< HEAD
              <p className="popup__title">
                Что-бы узнать инфу о рыбах нажмите на рыбу, сначало пройдите
                регистрацию
              </p>
=======
              <p className="popup__title">Чтобы выбрать нажмите на картинку!</p>
>>>>>>> 8c10d55d04bc6d288a083be4ab954a5b5971c4ce
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
