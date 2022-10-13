import firebase from "../../firebase/firebase";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./FishOcean.scss";

function FishOcean() {
  const ref = firebase.firestore().collection("fish");
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setdata(items);
      setloader(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row>
        {loader === false &&
          data.map((dev) => (
            <Col xs={3} md={4}>
              <div className="fishs" key={dev.id}>
               
                <a href={dev.href}> <img className="fishs__img" src={dev.img} /></a>
                <h3>{dev.name}</h3>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default FishOcean;
