import React from "react";
import '../fishCss/fish.css'



const Polar_bear = () => {
  return (
    <div>
      <h1>Polar Bear</h1>
      <p>Discription</p>
      <img src="https://animalcorner.org/wp-content/uploads/2015/02/Polar-Bear.png"/>
      <p>
      Бе́лый медве́дь, или полярный медведь, северный медведь, ошку́й, нанук, умка,
      — хищное млекопитающее семейства медвежьих, близкий родственник бурого медведя.
       Второй по величине сухопутный хищник планеты после гребнистого крокодила.
        Назван так из-за белой шерсти.
      </p>
      <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/9vgnXRypc4o" title="YouTube video" allowFullScreen className="vidbear"></iframe>
</div>
    </div>
  );
};
export  {Polar_bear}
