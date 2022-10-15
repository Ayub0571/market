import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../fishCss/fish.css";

const Dolphin = () => {
  const location = useLocation();

  const [data, setData] = useState({ name: "", img: "", description: "", video: "" });

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
    setData (search);
  }, []);

  return (
    <div className="dolphin">
      <div>
        <h1>{data.name}</h1>
        
        <p>Discription</p>
        <img src={data.img} alt="" />
        <p>
          {data.description}
        </p>
        <div className="ratio ratio-16x9">
        <iframe src= {data.video}
                      title="YouTube video"
                      allowFullScreen
                      className="vidbear"/>
        </div>
      </div>
    </div>
  );
};
export { Dolphin };