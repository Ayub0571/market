import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";

import { storage } from "../firebase/firebase.js";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { upload } from "@testing-library/user-event/dist/upload";
import "./Header.scss";
import Ocean from "../components/Ocean/Ocean.js";
import "../Routs/Routs.css";
import "../fishCss/fish.css";

import Animation from "components/OceanAnimations/Animation.js";

import { Routes, Route } from "react-router-dom";
import { Blog } from "./Blog";
const Home = () => {
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Файл загружен");
    });
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="wrapper">
      <div className="header">
        <div className="output">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload img</button>
          {imageList.map((url) => {
            return (
              <div className="upload">
                <img className="img" src={url} />
              </div>
            );
          })}
        </div>
        <div className="header__logo"></div>
        <div className="header__login">
          <div className="custom-search"></div>
          <div className="forel"></div>
          <div className="custom-search"></div>
          <div className="header__sign-in">Sign in</div>
          <div className="header__sign-up">Sign up</div>
        </div>
      </div>
      <Ocean />
    </div>
  );
};

export { Home };
