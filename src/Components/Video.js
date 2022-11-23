import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./fishCss/fish.css";
import "../App.css";
import firebase from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./Animal.scss";
import ReactPlayer from "react-player";


const Video = () => {
  const location = useLocation();
 

  const [data, setData] = useState({
   
    video: "",
  });
  const ref = firebase.firestore().collection("fish");

  useEffect(() => {
    const search = {};
    location.search
      .substring(2)
      .split("&")
      .forEach((el) => {
        const tmp = el.split("=");
        search[tmp[0]] = tmp[1];
      });

    const docRef = doc(firebase.firestore(), "fish", search.id);
    getDoc(docRef)
      .then((response) => {
        setData({ ...response.data(), id: response.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  
  return (

    <div className="animal">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>


      <div className="animal_2">
      <div>

        <ReactPlayer controls url={data.video}/>
       
     </div>
      </div>
        </Col>
      </Row>
      </Container>
    </div>




  );
};
export { Video };
