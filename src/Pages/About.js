import React from 'react'
import {Link} from 'react-router-dom'
import './Routs.css'





const About = () => {
  return (
    <div>
      <h1>Blog</h1>
      <h2>Something about us. Go <Link to='/' className='a'>Home</Link> </h2>
      <img src='https://www.impactplus.com/hubfs/blog-image-uploads/best-about-us-pages.jpg' alt='About'/>
    </div>
  )
}
export default  About
  





