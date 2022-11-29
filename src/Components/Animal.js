// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./fishCss/fish.css";
import "../App.css";
import firebase from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { Row, Col, CarouselItem } from "react-bootstrap";
import "./Animal.scss";
// import ReactReadMoreReadLess from "react-read-more-read-less";
import back2 from "./img/arrow.png"
// import ReactPlayer from "react-player";
import Carousel from 'react-bootstrap/Carousel'
import Wikipedia from "./img/Wikipedia.png"
import { Grid } from 'react-loading-icons'
// import  loading_1 from './img/loading_1.png'


const Animal = () => {
  const location = useLocation();
  

  const [data, setData] = useState({
    name: "",
    img: "",
    description: "",
    id: "",
    a: "",
    prev: "",
    next: "",
    video: "",
  });
  const ref = firebase.firestore().collection("fish");

  const [loading, setloading] = useState(false);

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
    setloading(true);
    getDoc(docRef)
      .then((response) => {
        setData({ ...response.data(), id: response.id });
        setloading(false)
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  

  
  return (  

    <div className="animal">
                         {loading ? 
                        <div className="Grid">
                      <Grid className='Grid_2'/>   
                      </div> 
                      : null}  
      <Container>
        <Row>
         
        <div className="arrows">
          <p><a href={data.prev }><img src={back2} alt="1" className="png"/></a></p> 
          <p><a href={data.next }><img src={back2} alt="1" className="png2"/></a></p> 
        </div> 
      <div className="animal_2">
        
      <div>
                 
        <Carousel interval={null}>
          

          <CarouselItem className="Carus_1" > 
           <Col xl={12} lg={9} md={8} sm={8} xs={8}>
            <div className="animal_3">
            <h1 className="h1">{data.name}</h1>
            <p className="p1">Описание</p>
            <img src={data.img} alt="1" className="allfish" />
             
            <div className="text_main">

             <p className="fish_text">{data.description} </p></div>
             <a href={data.a} className="link" target="_blank" rel="noopener noreferrer"><img src={Wikipedia} alt="2" className="jpg"/></a>
             
                    
             </div>
            </Col>
          </CarouselItem>
          
            <CarouselItem className="Carus_2">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>

          
          

            <div>
              <iframe src={data.video} title="YouTube video" allowFullScreen className="video"></iframe>
            </div>

            
            
            
            
            
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
