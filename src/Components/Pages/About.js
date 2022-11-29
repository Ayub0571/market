import Footer from "components/Footer/Footer";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./About.scss";

function MyVerticallyCenteredModal(props) {
  return (
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Разработчик
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Junior</h4>
        <p>
         Frontend developer
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function VV() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container>
      <Row>
        
          <div className="blog">
            <div className="blog__content">
             
              <div className="blog__title">
                 <Col xs={12} md={10} lg={12} sm={8} xl={5}>
                  <h1>Аюб</h1>
                  <img
                    className="blog__img"
                    src="https://1prime.ru/images/83206/75/832067535.jpg"
                    alt=""
                  />
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Узнать подробнее
                  </Button> 
                    </Col> 
              </div>
              
            
              <div className="blog__title-2">
                  <Col xs={12} md={10} lg={12} sm={8} xl={5}>
                <h1>Байсал</h1>
                <img
                  className="blog__img"
                  src="https://moneymakerfactory.ru/Pics/nodecrp/328_6img_n.jpeg"
                  alt=""
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Узнать подробнее
                </Button>
               </Col>
              </div>
               
            </div>
            <Col xs={12} md={12} lg={8} sm={12} xl={8}>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <p>
              Этот web-cite посвещён о жизни в океане. Вы увидете его обитателей, и найдете подробную информацию о каждом из них. Приятного просмотра.
             </p>
             </Col>
             <Col xs={12} md={10} lg={7} sm={8} xl={5}>
            <Footer />
            </Col>
          </div>
        
      </Row>
    </Container>
  );
}
export default VV;
