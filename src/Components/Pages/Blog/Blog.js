import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import back2 from "../../img/back2.png";
import Slide from "components/Slide/Slide.js";

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col >
          <div className="blog__content"></div>
          <Slide />
          <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Океан</h1>
          <div className="">
            1. Все водное пространство Земли, окружающее материки и острова.
            Мировой океан.
          </div>
          <div className="">
            2. Водное пространство между материками. Великий или Тихий океан.
          </div>
          <div className="">
            Океан и атмосфера. Мировой океан, средняя глубина которого
            составляет ок. 4 км, содержит 1350 млн. км3 воды. Атмосфера,
            окутывающая всю Землю слоем толщиной в несколько сотен километров, с
            гораздо большим основанием, чем Мировой океан, может рассматриваться
            как «оболочка». И океан и атмосфера представляют собой текучие
            среды, в которых существует жизнь; их свойства определяют среду
            обитания организмов.
          </div>
          <div className="">
            Состав морской воды. Вода в океане соленая. Соленый вкус придают
            содержащиеся в ней 3,5% растворенных минеральных веществ – главным
            образом соединения натрия и хлора – основные ингредиенты столовой
            соли.
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Blog;
