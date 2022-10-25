import React from "react";

import "../Routs/Routs.scss";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div className="comands">
        <div className="Asel">
          <h1>Asel</h1>
          <img
            src="https://www.pngall.com/wp-content/uploads/6/Simpsons-Movie-PNG-Image-File.png"
            alt=""
          />
          <br />
          <button>Узнать подробнее про меня</button>
        </div>
        <div className="Bais">
          <h1>Baisal</h1>
          <img
            src="https://avatanplus.com/files/resources/original/57a749ac7547a1566577c9c0.png"
            alt=""
          />
          <br />
          <button>Узнать подробнее про меня</button>
        </div>
        <div className="Aiub">
          <h1>Aiub</h1>
          <img
            src="https://www.pngall.com/wp-content/uploads/6/Simpsons-Movie-PNG-Image-File.png"
            alt=""
          />
          <br />
          <button>Узнать подробнее про меня</button>
        </div>
      </div>
    </div>
  );
};
export default About;
