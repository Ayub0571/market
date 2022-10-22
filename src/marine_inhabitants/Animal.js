import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../fishCss/fish.css";
import "../App.css"
import firebase from "../firebase/firebase";
import {doc, getDoc} from "firebase/firestore";



const Animal = () => {
  const location = useLocation();
  
  const [data, setData] = useState({ name: "", img: "", description: "", id : ''});
  const ref = firebase.firestore().collection("fish");

  

  useEffect(() => {
    const search = {};
    location.search
      .substring(1)
      .split("&")
      .forEach((el) => {
        const tmp = el.split("=");
        search[tmp[0]] = tmp[1];

        
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
      </div>
    </div>
  );
};
export { Animal };