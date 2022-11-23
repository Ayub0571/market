import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./fishCss/fish.css";
import "../App.css";
import firebase from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { Row, Col, CarouselItem } from "react-bootstrap";
import "./Animal.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";
import back2 from "./img/arrow.png"
import ReactPlayer from "react-player";
import Carousel from 'react-bootstrap/Carousel'



const Animal = () => {
  const location = useLocation();
  

  const [data, setData] = useState({
    name: "",
    img: "",
    description: "",
    id: "",
    a: "",
    prev: "",
    video: "",
  });
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
          
      <p><a href={data.prev }><img src={back2} alt="1" className="png"/></a></p> 

      <div className="animal_2">
        
      <div>
                 

        <Carousel interval={null}>

          <CarouselItem className="Carus_1" > 
           <Col xl={12} lg={10} md={8} sm={6} xs={8}>
            <div className="animal_3">
            <h1>{data.name}</h1>
            <p >Описание</p>
            <img src={data.img} alt="1" className="allfish" />
            
            <p className="fish_text">{data.description} <a href={data.a} className="link" target="_blank" rel="noopener noreferrer">More</a></p>
            </div>
            </Col>
          </CarouselItem>
          

            <CarouselItem className="Carus_2">
            <Col xl={12} lg={12} md={12} sm={12} xs={6}>

          <div className="video"><ReactPlayer  controls  url={data.video} className='video'/></div>
         </Col>
          </CarouselItem>
          
        </Carousel>
       
     </div>
      </div>
        
      </Row>
      </Container>
    </div>




  );
};
export { Animal };
