import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../fishCss/fish.css";
import "./Dolphin.scss";

const Dolphin = () => {
  const location = useLocation();

  const [data, setData] = useState({ name: "", img: "", description: "" });

  useEffect(() => {
    const search = {};
    location.search
      .substring(1)
      .split("&")
      .forEach((el) => {
        const tmp = el.split("=");
        search[tmp[0]] = tmp[1];
      });
    console.log(search);
    setData(search);
  }, []);

  return (
    <div className="dolphin">
      <div>
        <h1>{data.name}</h1>
        {/* <h1>Dolphin</h1> */}
        <p>Discription</p>
        <img src={data.img} alt="" />
        {/* <img src="https://www.cmaquarium.org/app/uploads/2021/06/2021.04-Nick-Underwater-0001-768x512.jpg" /> */}
        <p>
          {/* Дельфи́ны — водные млекопитающие инфраотряда китообразных,
          принадлежащие либо к семейству дельфиновых (Delphinidae) — морские,
          либо к нетаксономической группе речных дельфинов — пресноводные. Любят
          воду и мелкую рыбу. */}
          {data.description}
        </p>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/G7L4YzGAvMA"
            title="YouTube video"
            allowFullScreen
            className="vidbear"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export { Dolphin };
