import React from 'react'
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import '../fishCss/fish.css'

export default function Fish() {
  return (
    <div>
      <h1 className='route'>Описание</h1>
      
      <p >
        Как вообще среди лососевых рыб, так и в роде Salmo установление видов чрезвычайно затруднительно вследствие близости их друг к другу и
        существования множества разновидностей. Поэтому и видовая самостоятельность форели часто подвергалась сомнению: так, настоящая или
        речная форель (S. fario) часто считается тождественной с озёрной форелью (S. lacustris).
      </p>
      <img src='https://image.shutterstock.com/mosaic_250/734992/580306465/stock-photo-gold-fish-isolated-on-white-background-580306465.jpg' alt='Fish' />
       <Container>
       <div className='ratio ratio-16x9'>
         <iframe src="https://www.youtube.com/embed/xbzRt2XFSI0" title="YouTube video" allowFullScreen id='videofish'></iframe>
        </div>
       </Container>
    </div>
    
  )
}

  

