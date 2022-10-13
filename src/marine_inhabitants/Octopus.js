import React from "react";
import '../fishCss/fish.css'



const Octopus = () => {
  return (
    <div>
      <h1>Octopus</h1>
      <p>Discription</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/CaliforniaTwoSpotOctopus2.jpg"/>
      <p>
      Осьмино́ги, или спру́товые (лат. Octōpoda, от др.-греч. ὀϰτώ «восемь» и πούς «нога»), 
      — самый известный отряд головоногих моллюсков. Типичные осьминоги, описанные в этой статье,
       — представители подотряда Incirrina, придонные животные. Но некоторые представители этого
        подотряда и все виды второго подотряда Cirrina — пелагические животные, обитающие в толще воды,
         причём многие из них встречаются только на больших глубинах. Наука, изучающая осьминогов
          и других головоногих моллюсков, называется теутология.
      </p>
      <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/oSyEZAm8nb8" title="YouTube video" allowFullScreen className="vidbear"></iframe>
</div>
    </div>
  );
};
export  {Octopus}