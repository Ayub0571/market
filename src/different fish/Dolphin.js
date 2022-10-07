import React from "react";
// import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../fishCss/fish.css";

export default function Dolphin() {
  return (
    <div>
      <h1>Описание</h1>

      <p>
        Дельфи́ны — водные млекопитающие инфраотряда китообразных, принадлежащие
        либо к семейству дельфиновых (Delphinidae) — морские, либо к
        нетаксономической группе речных дельфинов — пресноводные. Любят воду и
        мелкую рыбу.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Parc_Asterix_20.jpg"
        alt="Shark"
      />
      <Container>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/G7L4YzGAvMA"
            title="YouTube video"
            allowFullScreen
            id="videoShark"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
