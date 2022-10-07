import React from 'react'
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import '../fishCss/fish.css'

export default function Shark() {
  return (
    <div>
      <h1>Описание</h1>
      
      <p>
      Аку́лы (лат. Selachii) — надотряд хрящевых рыб (Chondrichthyes),
      относящийся к подклассу пластиножаберных (Elasmobranchii) и обладающий следующими отличительными особенностями:
      удлинённое тело более или менее торпедообразной формы, большой гетероцеркальный хвостовой плавник, обычно много острых зубов на каждой челюсти.
      </p>
      <img src='https://www.nhm.ac.uk/content/dam/nhmwww/discover/megalodon/megalodon_warpaint_shutterstock-full-width.jpg.thumb.1160.1160.jpg' alt='Shark' />
       <Container>
       <div className='ratio ratio-16x9'>
         <iframe src="https://www.youtube.com/embed/4HGNqFdaD34" title="YouTube video" allowFullScreen id='videoShark'></iframe>
        </div>
       </Container>
    </div>
    
  )
}
