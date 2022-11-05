import Footer from "components/Footer/Footer";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./About.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
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
    <div className="blog">
      <div className="blog__content">
        <div className="blog__title">
          <h1>Байсал</h1>
          <img
            className="blog__img"
            src="https://whyy.org/wp-content/uploads/2017/07/crimmins-300px-1.jpg"
            alt=""
          />
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Узнать подробнее
          </Button>
        </div>
        <div className="blog__title-2">
          <h1>Аюб</h1>
          <img
            className="blog__img"
            src="https://whyy.org/wp-content/uploads/2017/07/crimmins-300px-1.jpg"
            alt=""
          />
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <Button variant="primary" onClick={() => setModalShow(true)}>
            Узнать подробнее
          </Button>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Footer />
    </div>
  );
}
export default VV;
