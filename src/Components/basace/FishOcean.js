import firebase from "../firebase/firebase";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "App.css";
import "../Ocean/Ocean.scss";
import "./FishOcean.scss";
import "./FishOcean.scss";

<<<<<<< HEAD
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";
=======
>>>>>>> 8c10d55d04bc6d288a083be4ab954a5b5971c4ce

function FishOcean() {
  const ref = firebase.firestore().collection("fish");
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setdata(items);
      setloader(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const [count, setCount] = useState(false);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setloader(!loader);
      setSaved(true);
      await updateDoc(movieID, {
        saveShow: arrayUnion({}),
      });
    } else {
      alert("Зарегестрируйтесь");
    }
  };

  return (
    <Container className="fishapp">
      <Row>
        {loader === false &&
          data.map((dev) => {
            return (
              
              <Col xs={12} md={6} lg={4} sm={5} xl={4}>
<<<<<<< HEAD
                <p>
                  {like ? (
                    <FaHeart className="fishs__img fishs__like absolute top-10 left-4 text-gray-300" />
                  ) : (
                    <FaRegHeart className="fishs__img fishs__like absolute top-4 left-4 text-gray-300" />
                  )}
                </p>
                <div className="fishs" key={dev.id}>
                  <Link
                    style={{
                      pointerEvents: count === !user ? "" : "none",
                    }}
                    to={"/animal?id=" + dev.id}
                  >
                    <img
                      onClick={saveShow}
                      className="fishs__img"
                      src={dev.img}
                    />
=======
                
                <div className="fishs" key={dev.id}>
                  
                  <Link to={"/animal?id=" + dev.id}>
                    <img className="fishs__img" src={dev.img} />
>>>>>>> 8c10d55d04bc6d288a083be4ab954a5b5971c4ce
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
