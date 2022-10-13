import React from "react";
import '../fishCss/fish.css'



const Dolphin = () => {
  return (
    <div>
      <h1>Dolphin</h1>
      <p>Discription</p>
      <img src="https://www.cmaquarium.org/app/uploads/2021/06/2021.04-Nick-Underwater-0001-768x512.jpg"/>
      <p>
      Дельфи́ны — водные млекопитающие инфраотряда китообразных, принадлежащие либо к семейству дельфиновых
       (Delphinidae) — морские, либо к нетаксономической группе речных дельфинов — пресноводные. Любят воду и мелкую рыбу.
      </p>
      <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/G7L4YzGAvMA" title="YouTube video" allowFullScreen className="vidbear"></iframe>
</div>
    </div>
  );
};
export  {Dolphin}