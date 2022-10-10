import React from "react";
import "./Ocean.scss";
import {Link} from 'react-router-dom'
import 'fishCss/fish.css'


const Ocean = () => {
  return (
    <div className="main">
      <div className="bgi">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="seafood">
          <div>
            <Link to='/fish'><img src='https://i.pinimg.com/originals/58/41/12/584112a58aa89f5401c895d6b7ebe521.png' className="fishimg" alt='img' /></Link>
          </div>

          <div>
            <Link to='/shark'><img src='https://pngimg.com/uploads/shark/shark_PNG18831.png' className="imgshark" alt='img2' /></Link>
          </div>

          <div>
            <Link to='/squid'><img src='https://www.pngplay.com/wp-content/uploads/2/Real-Squid-PNG-Clipart-Background.png' className="imgshark" alt='img3' /></Link>
          </div>

          <div>
            <Link to='/dolphin'><img src='https://pngimg.com/uploads/dolphin/dolphin_PNG71309.png' className="imgshark" alt='img4' /></Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ocean;
