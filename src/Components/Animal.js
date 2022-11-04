import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./fishCss/fish.css";
import "../App.css";
import firebase from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./Animal.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";


const Animal = () => {
  const location = useLocation();

  const [data, setData] = useState({
    name: "",
    img: "",
    description: "",
    id: "",
    a: "",
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

  // Читать дальше...

  return (

    <div className="animal">
      <Container>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <p><Link to="/home"><img src="https://cdn-icons-png.flaticon.com/512/17/17699.png" alt="1" className="png"/></Link></p>

      <div className="animal_2">
        <h1>{data.name}</h1>
        <p >Описание</p>
        <img src={data.img} alt="1" className="allfish" />
        
        <p className="fish_text">{data.description}</p>
        
        <p><a href={data.a} className="link" target="_blank" rel="noopener noreferrer">More information</a></p>
      </div>
        </Col>
      </Row>
      </Container>
    </div>




    // <div className="animal">
    //   <Container>
    //     <Row>
    //       <Col xl={12} lg={12} md={12} sm={12} xs={12}>
    //         <div>
    //           <h1>
    //             <span className="animal__name"> {data.name}</span>
    //           </h1>
    //           <img src={data.img} alt="1" className="allfish" />

    //           <p className="animal__descrip">Описание</p>
    //           <ReactReadMoreReadLess
    //             readMoreClassName="readMore"
    //             charLimit={200}
    //             readMoreText={"Read more ▼"}
    //             readLessText={"Read less ▲"}
    //           >
    //             <p className="text_fish">
    //             {data.description}
    //             </p>
    //           </ReactReadMoreReadLess>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};
export { Animal };
