import React from "react";
import '../fishCss/fish.css'



const Penguin = () => {
  return (
    <div>
      <h1>Penguin</h1>
      <p>Discription</p>
      <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/362635561/900"/>
      <p>
      Импера́торский пингви́н[1][2] (лат. Aptenodytes forsteri), также известен как пингвин Форстера
      — самый крупный и тяжёлый из современных видов семейства пингвиновых. Его средний рост составляет
       около 122 см, а вес колеблется между 22 и 45 кг. Голова и задняя часть тела чёрная, брюшная часть
        — белая, к верху становящаяся жёлтой. Как и все пингвиновые, императорские пингвины не умеют летать.
         Вместе с королевским пингвином относится к роду императорских пингвинов (Aptenodytes).
          Видовое латинское название дано в честь немецкого учёного Иоганна Форстера (1729—1798)[3].
      </p>
      <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/rbzxxbuk3sk" title="YouTube video" allowFullScreen className="vidbear"></iframe>
</div>
    </div>
  );
};
export  {Penguin}
