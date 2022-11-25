import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Header.scss";
import Ocean from "../../Ocean/Ocean.js";

import "../../Routs/Routs.scss";
import "../../fishCss/fish.css";

import Modal from "components/Modal/Modal";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={darkMode ? "home-mode" : "home"}>
              <input
                className="hom__toggler"
                type="checkbox"
                id="toggle_checkbox"
                onChange={() => setDarkMode(!darkMode)}
              />

              <Modal />
              <div className="image">
                <div className="wrapper">
                  <div className="header">
                    <div className="bar">
                      <section>
                        <div className="content">
                          <h2>Ocean</h2>
                          <h2>Ocean</h2>
                        </div>
                      </section>
                    </div>
                    <img
                      className="bar__img"
                      src="https://pngicon.ru/file/uploads/morskaya-zvezda.png"
                      alt=""
                    />
                  </div>
                  <Ocean />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Home };
