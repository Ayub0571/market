import React from 'react'
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import '../fishCss/fish.css'

export default function Squid() {
  return (
    <div>
      <h1>Описание</h1>
      
      <p >
      Осьмино́ги, или спру́товые (лат. Octōpoda, от др.-греч. ὀϰτώ «восемь» и πούς «нога»), — самый известный отряд головоногих моллюсков. 
      Типичные осьминоги, описанные в этой статье, — представители подотряда Incirrina, придонные животные. Но некоторые представители этого
      подотряда и все виды второго подотряда Cirrina — пелагические животные, обитающие в толще воды, причём многие из них встречаются только на
      больших глубинах. Наука, изучающая осьминогов и других головоногих моллюсков, называется теутология.
      </p>
      <img src='http://cdn.shopify.com/s/files/1/0266/5817/7121/articles/2_89d20cd3-2eb5-41c4-a2ae-a0fd17c2c0f6_1200x1200.png?v=1640806305' alt='Fish' />
       <Container>
       <div className='ratio ratio-16x9'>
         <iframe src="https://www.youtube.com/embed/okBpSCqrNFA" title="YouTube video" allowFullScreen id='videoSquid'></iframe>
        </div>
       </Container>
    </div>
    
  )
}

  

