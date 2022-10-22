import firebase from "../firebase/firebase";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "App.css"
import '../Ocean/Ocean.scss'
import "./FishOcean.scss";
import './FishOcean.scss'

function FishOcean() {
  const ref = firebase.firestore().collection("fish");
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(),id: doc.id});
      });
      setdata(items);
      setloader(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="fishapp">
      <Row>
        {loader === false &&
          data.map((dev) => {
          
            return (
              <Col xs={12} md={6} lg={4} sm={5} xl={4}>
                <div className="fishs" key={dev.id}>
                  <Link to={"/animal?id=" + dev.id}>
                    <img className="fishs__img" src={dev.img} />
                  </Link>
                  <h3>{dev.name}</h3>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default FishOcean;



