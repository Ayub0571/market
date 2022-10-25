import React from "react";
import "../Routs/Routs.scss";
import "./About.scss";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";



const About = () => {
  
  return (
    <Container>
      <Row>

          <div className="comands row">
          <Col xl={4} lg={4} md={6} sm={5} xs={12}>

            <div  className="Asel" >
                  <h1>Asel</h1>
                  
                <img
                  src="https://www.pngall.com/wp-content/uploads/6/Simpsons-Movie-PNG-Image-File.png"
                  alt=""
                className="img" />
                
                <button>Узнать подробнее про меня</button>
            </div>
            </Col>
            <Col xl={4} lg={4} md={6} sm={5} xs={12}>
            <div className="Bais">
                <h1>Baisal</h1>
                <img
                  src="https://avatanplus.com/files/resources/original/57a749ac7547a1566577c9c0.png"
                  alt=""
                  className="img" />
                
                <button>Узнать подробнее про меня</button>
            </div>
            </Col>
            <Col xl={4} lg={4} md={6} sm={5} xs={12}>
            <div className="Aiub">
                <h1>Aiub</h1>
                <img
                  src="https://www.pngall.com/wp-content/uploads/6/Simpsons-Movie-PNG-Image-File.png"
                  alt=""
                  className="img" />
                
                <button>Узнать подробнее про меня</button>
            </div>
            </Col>
          </div>
     
       </Row>
     </Container>

    
  );
};
export {About};




  
    
      
    

