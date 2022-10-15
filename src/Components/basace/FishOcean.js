import firebase from "../../firebase/firebase";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
          data.map((dev) => {
            const query = `?name=${dev.name}&description=${
              dev.description || ""
            }&img=${dev.img} &video=${dev.video}`;
            return (
              <Col xs={3} md={4}>
                <div className="fishs" key={dev.id}>
                  <Link to={"/animal" + query}>
                    <img className="fishs__img" src={dev.img} />
                    
                  </Link>
                  
                   
                    
                 
                  {/* <Link to = {dev.to}> <img className="fishs__img" src={dev.img} /></Link> */}
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
