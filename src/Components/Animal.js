import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
<<<<<<< HEAD:src/Components/Animal.js
import "./fishCss/fish.css";

const Animal = () => {
  const location = useLocation();

  const [data, setData] = useState({
    name: "",
    img: "",
    description: "",
    video: "",
  });
=======
import "../fishCss/fish.css";
import "../App.css"
import firebase from "../firebase/firebase";
import {doc, getDoc} from "firebase/firestore";



const Animal = () => {
  const location = useLocation();
  
  const [data, setData] = useState({ name: "", img: "", description: "", id : ''});
  const ref = firebase.firestore().collection("fish");

  
>>>>>>> dev-2:src/marine_inhabitants/Animal.js

  useEffect(() => {
    const search = {};
    location.search
      .substring(1)
      .split("&")
      .forEach((el) => {
        const tmp = el.split("=");
        search[tmp[0]] = tmp[1];
<<<<<<< HEAD:src/Components/Animal.js
      });

    console.log(search);
    setData(search);
  }, []);

  return (
    <div className="dolphin">
      <div>
        <h1>{data.name}</h1>

        <p>Discription</p>
        <img src={data.img} alt="" />
        <p>{data.description}</p>
        <div className="ratio ratio-16x9">
          <iframe
            src={data.video}
            title="YouTube video"
            allowFullScreen
            className="vidbear"
          />
        </div>
=======

        
      });
       
      
      
      const docRef = doc(firebase.firestore(), "fish", search.id)
      getDoc(docRef).then(response => {
        setData({...response.data(),id: response.id});
        
      }) .catch(error => {
        console.log(error)
      })
  

  //   console.log(search);
  // setData (search);
 
  
  }, []);

  return (
    <div className="animal">
      <div>
        <h1>{data.name}</h1>
        
        <p>Discription</p>
        <img src={data.img} alt="" className="allfish" />
        <p>
          {data.description}
        </p>
>>>>>>> dev-2:src/marine_inhabitants/Animal.js
      </div>
    </div>
  );
};
<<<<<<< HEAD:src/Components/Animal.js
export { Animal };
=======
export { Animal };
>>>>>>> dev-2:src/marine_inhabitants/Animal.js
